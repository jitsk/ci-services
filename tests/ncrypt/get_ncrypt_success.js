// include the libraries
var utils 		= require('../utils.js');
var should 		= require('should');
var services 	= require('../../main.js');
var ncrypt 		= services.ncrypt;

// parameters
var string_to_encrypt = utils.randomString(30);
var encryption_reference = utils.randomString(10);
var encrypted_string = false;
var new_encryption_key = 'alias/production-ncrypt';

describe('GET /encrypt', function() {

  it('should encrypt the string successfully', function(done) {   
    
    var opts = {
    	string_to_encrypt: string_to_encrypt,
    	encryption_reference: encryption_reference
    }

    ncrypt("get", "/encrypt", opts, function(err, data) {

      // make sure we don't have an error
      (err === null).should.be.true;

      // make sure we have some data
      data.should.be.an.Object;
      data.should.have.property.success;
      data.should.have.property.data;
      
      encrypted_string = data.data;

      done();

    });

  });

});

describe('GET /decrypt', function() {

  it('should decrypt the string successfully', function(done) {   
    
    var opts = {
    	string_to_decrypt: encrypted_string,
    	encryption_reference: encryption_reference
    }

    ncrypt("get", "/decrypt", opts, function(err, data) {

      // make sure we don't have an error
      (err === null).should.be.true;

      // make sure we have some data
      data.should.be.an.Object;
      data.should.have.property.success;
      data.should.have.property.data;
      
      decrypted_string = data.data;
      decrypted_string.should.equal(string_to_encrypt);

      done();

    });

  });

});

describe('GET /reencrypt', function() {

  it('should re-encrypt the string successfully', function(done) {   
    
    var opts = {
    	encrypted_string: encrypted_string,
    	encryption_reference: encryption_reference,
    	new_encryption_key: new_encryption_key
    }

    ncrypt("get", "/reencrypt", opts, function(err, data) {

      // make sure we don't have an error
      (err === null).should.be.true;

      // make sure we have some data
      data.should.be.an.Object;
      data.should.have.property.success;
      data.should.have.property.data;

      done();

    });

  });

});
