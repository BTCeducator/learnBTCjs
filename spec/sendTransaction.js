var path = require('path');
var expect = require('chai').expect;
var helloblock = require('helloblock-js')({
  network: 'testnet',
  debug: true
});
var request = require('request');
var Promise = require('bluebird');

var SendTransaction = require(path.join(__dirname, '..', './sendTransaction.js'));

describe('SendTransaction', function(){

  // it...

});
