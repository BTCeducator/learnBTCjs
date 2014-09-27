var path = require('path');
var expect = require('chai').expect;
var helloblock = require('helloblock-js')({
  network: 'testnet',
  debug: true
});

var Transaction = require(path.join(__dirname, '..', './Transaction.js'));

describe('Transaction', function(){

  it('exists', function(){
    expect(Transaction).to.be.a('object');
  });

  it('should have a build method', function(){
    expect(Transaction.build).to.be.a('function');
  });

  it('should have a propagate method', function(){
    expect(Transaction.propagate).to.be.a('function');
  });

  describe('.build', function(){

    it('should return a valid transaction hash', function(done){
      var transactionHash = Transaction.build('n1y9JxYAxk4GvvZecSvwCLLgdmBRp7CLWd', 100000);
      helloblock.transactions.propagate(transactionHash, function(error, response, transaction){
        expect(response.status).to.equal('success');
        done();
      });
    });

  });

  describe('.propagate', function(){

    beforeEach(function(done){

      helloblock.faucet.withdraw(Transaction.address, 200000, function(){
        // add funds to the wallet
        var transactionHash = Transaction.build('n1y9JxYAxk4GvvZecSvwCLLgdmBRp7CLWd', 100000);
        helloblock.addresses.get('n1y9JxYAxk4GvvZecSvwCLLgdmBRp7CLWd', function(error, response, transaction){
          // check balance
          if( response.status === 'success' ){
            var oldBalance = response.data.address.balance;
          }
          // propogate transaction
          Transaction.propagate(transactionHash);
          done();
        });
      });

    });

    it('should broadcast transactions', function(done){

      helloblock.addresses.get('n1y9JxYAxk4GvvZecSvwCLLgdmBRp7CLWd', function(error, response, transaction){
        if( response.status === 'success' ){
          var newBalance = response.data.address.balance;
        }
        expect(oldBalance).to.not.equal(newBalance);
        done();
      });

    });

    it('should specify a mining fee + give change to sending address', function(){

      helloblock.addresses.get('n1y9JxYAxk4GvvZecSvwCLLgdmBRp7CLWd', function(error, response, transaction){
        if( response.status === 'success' ){
          var newBalance = response.data.address.balance;
        }
        expect(newBalance).to.not.equal(0);
        done();
      });

    })

  });

});
