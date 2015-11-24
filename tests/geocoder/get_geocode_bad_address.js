
// include the libraries
var should = require('should');
var services = require('../../main.js');
var geocoder = services.geocoder;

describe('GET /geocode/address', function() {

  it('should Fail because we are giving it an address it knows nothing about', function(done) {

    // parameters
    var opts = {
      address1: "66 BlahSocks Road",
      town: "BlahSocks",
      county: "BlahSocks",
      postcode: "BlahSocks",
      country: "GB"
    }

    geocoder("get", "/geocode/address", opts, function(err, data) {

      // make sure we don't have an error
      err.should.be.an.Object;
      err.success.should.be.false;

      done();

    })

  })

})