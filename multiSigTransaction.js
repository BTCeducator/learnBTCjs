var Bitcoin = require('bitcoinjs-lib');
var helloblock = require('helloblock-js')({
  network: 'testnet',
  debug: true
});

var multiSigTransaction = function(wallet, destinationAddress, amount){

  // make, sign and broadcast a multisignature transaction

  // assume:
  // n private keys are provided
  // and m public keys
  // originAddress is a multisignature address

};

module.exports = multiSigTransaction;
