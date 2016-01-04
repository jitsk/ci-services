// include the libraries
var should 		= require('should');
var services 	= require('../../main.js');
var ncrypt 		= services.ncrypt;

describe('GET /weeeeeee', function() {

  it('should fail because we are sending to an endpoint that is unknown', function(done) {

    // parameters
    var opts = {
      cake: "cheese"
    }

    ncrypt("get", "/weeeeeee", opts, function(err, data) {

      // make sure we have an error
      err.should.be.a.String;

      done();

    });

  });

});