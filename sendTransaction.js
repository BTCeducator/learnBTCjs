var Bitcoin = require('bitcoinjs-lib');
var base58 = require('bs58');
var helloblock = require('helloblock-js')({
  network: 'testnet',
  debug: true
});

var myWallet = require('./makeWallet');

var SendTransaction = function(){
  // Your code here...

};

module.exports = SendTransaction;
