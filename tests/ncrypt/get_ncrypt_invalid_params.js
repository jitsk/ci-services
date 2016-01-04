// include the libraries
var should 		= require('should');
var services 	= require('../../main.js');
var ncrypt 		= services.ncrypt;

describe('GET /reencrypt', function() {

  it('should fail because we are sending an invalid KMS param', function(done) {

    // parameters
    var opts = {
      encrypted_string: "Encrypt this please",
      encryption_reference: "Wee-Waa",
      new_encryption_key: "alias/fakey-kms-key"
    }

    ncrypt("get", "/reencrypt", opts, function(err, data) {

      // make sure we have an error
      err.should.be.an.Object;
      err.success.should.be.false;

      done();

    });

  });

});