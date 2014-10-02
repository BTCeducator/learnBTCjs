var path = require('path');
var expect = require('chai').expect;
var base58check = require('bs58check');
var Bitcoin = require('bitcoinjs-lib');
var helloblock = require('helloblock-js')({
  network: 'testnet',
  debug: true
});

var multiSigTransaction = require(path.join(__dirname, '..', './multiSigTransaction.js'));
var MultiSigWallet = require(path.join(__dirname, '..', './MultiSigWallet.js'));

describe('multiSigTransaction', function(){

  it('should exist', function(){
    expect(multiSigTransaction).to.be.a('function');
  });

  // you can ignore this. it just adds bitcoin to whatever wallet is generated
  var oldBalance;
  beforeEach(function(done){
    
    var multiSigWallet = new MultiSigWallet();

    helloblock.faucet.withdraw(multiSigWallet.address, 1000000, function(){
      helloblock.addresses.get('2NCQJS4YcbBwWyTSMv3MmsxksHCaeQ32gZe', function(error, response, address){
        
        oldBalance = address.balance;
        multiSigTransaction(multiSigWallet, address.address, 100000);
        done();
        
      });
    });

  });

  it('should send funds from multi signature wallet', function(done){
    helloblock.addresses.get('2NCQJS4YcbBwWyTSMv3MmsxksHCaeQ32gZe', function(error, response, address){
      expect(address.balance).to.not.equal(oldBalance);
      done();
    });
  });

});
