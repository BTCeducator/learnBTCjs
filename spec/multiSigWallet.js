var path = require('path');
var expect = require('chai').expect;
var Bitcoin = require('bitcoinjs-lib');
var base58check = require('bs58check');

var MultiSigWallet = require(path.join(__dirname, '..', './MultiSigWallet.js'));

describe('MultiSigWallet()', function(){
  var multiSigWallet = new MultiSigWallet();

  it('should be a function', function(){
    expect(MultiSigWallet).to.be.a('function');
  });

  it('should return an object with an address and privateKeys property', function(){
    expect(multiSigWallet).to.be.a('object');
    expect(multiSigWallet.address).to.be.a('string');
    expect(multiSigWallet.privateKeys).to.be.an('Array');
  });

});
