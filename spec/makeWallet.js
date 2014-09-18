var path = require('path');
var expect = require('chai').expect;
var Bitcoin = require('bitcoinjs-lib');
var base58check = require('bs58check');

var MakeWallet = require(path.join(__dirname, '..', './makeWallet.js'));

describe('MakeWallet', function () {
  'use strict';
  var wallet;

  beforeEach(function(){
    wallet = new MakeWallet();
  });

  it('exists', function () {
    expect(MakeWallet).to.be.a('function');
  });
  
  it('should return an object', function () {
    expect(wallet).to.be.a('object');
  });

  it('should have an address property', function(){
    expect(wallet.address).to.be.ok;
  });

  it('should have a privateKey property', function(){
    expect(wallet.privateKey).to.be.ok;
  });

  it('should have a transaction method', function(){
    expect(wallet.transaction).to.be.a('function');
  });

  describe('address', function(){

    it('should be a string', function(){
      expect(wallet.address).to.be.a('string');
    });

    it('should be correct length', function(){
      expect(wallet.address.length).to.equal(34);
    });

    it('should be base58 format', function(){
      expect(base58check.decode(wallet.address)).to.be.ok;
    });

    it('should be a testnet wallet', function(){
      expect(wallet.address[0]).to.match(/m|n/);
    });

  });

  describe('privateKey', function(){

    it('should be a string', function(){
      expect(wallet.privateKey).to.be.a('string');
    });

    it('should be correct length', function(){
      expect(wallet.privateKey.length).to.equal(52);
    });

    it('should be base58 format', function(){
      expect(base58check.decode(wallet.privateKey)).to.be.ok;
    });

    it('should be a testnet private key', function(){
      expect(wallet.privateKey[0]).to.match(/K|L/);
    });

  });
    
});
