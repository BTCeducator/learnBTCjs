var Bitcoin = require('bitcoinjs-lib');
var base58 = require('bs58');
var helloblock = require('helloblock-js')({
  network: 'testnet',
  debug: true
});

var MakeWallet = require('./makeWallet');

var myWallet = new MakeWallet();

var Transaction = {

  // Your code here...
  build: function(to, amount){

  },
  
  propogate: function(transactionHash){

  }

};

module.exports = Transaction;
