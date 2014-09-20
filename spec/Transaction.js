var path = require('path');
var expect = require('chai').expect;
var helloblock = require('helloblock-js')({
  network: 'testnet',
  debug: true
});
var request = require('request');
var Promise = require('bluebird');

var Transaction = require(path.join(__dirname, '..', './sendTransaction.js'));

describe('Transaction', function(){

  it('exists', function(){
    expect(Transaction).to.be.a('object');
  });

  it('should have a build method', function(){
    expect(Transaction.build).to.be.a.('function');
  });

  it('should have a propogate method', function(){
    expect(Transaction.propogate).to.be.a.('function');
  });

});
