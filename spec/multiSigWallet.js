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

  describe('.address', function(){
    
    it('should be a valid testnet wallet address', function(){
      expect(multiSigWallet.address[0]).to.equal('2');
      expect(multiSigWallet.address.length).to.equal(35);
      expect(base58check.decode(multiSigWallet.address)).to.be.ok;
      expect(multiSigWallet.address)
    });

  });

  describe('.privateKeys', function(){
    
    it('should be valid testnet privateKeys', function(){
      multiSigWallet.privateKeys.forEach(function(privateKey){
        expect(privateKey[0]).to.equal('c');
        expect(privateKey.length).to.equal(52);
        expect(base58check.decode(privateKey)).to.be.ok;
      });
    });

  });

  describe('.publicKeys', function(){
    
    it('should have an array of all public key hexes (used for redeemScript)', function(){
      expect(multiSigWallet.publicKeys.length).to.equal(3);
      multiSigWallet.publicKeys.forEach(function(publicKey){
        expect(publicKey.length).to.equal(66);
        expect(parseInt(publicKey, 16)).to.be.ok;
      });
    });

  });

});
