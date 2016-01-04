// include the libraries
var should 		= require('should');
var services 	= require('../../main.js');
var ncrypt 		= services.ncrypt;

describe('GET /encrypt', function() {

  it('should fail because we are sending no parameters through', function(done) {

    // parameters
    var opts = {};

    ncrypt("get", "/encrypt", opts, function(err, data) {

      // make sure we have an error
      err.should.be.an.Object;
      err.success.should.be.false;

      done();

    });

  });

});