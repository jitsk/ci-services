
// include the libraries
var should = require('should');
var services = require('../../main.js');
var geocoder = services.geocoder;

describe('GET /geocode/address1', function() {

  it('should fail because we are sending to an endpoint that is unknown', function(done) {

    // parameters
    var opts = {
      address1: "66 Tyne Road",
      town: "Redcar",
      county: "cleveland",
      postcode: "TS10 1PZ",
      country: "gb"
    }

    geocoder("get", "/geocode/address1", opts, function(err, data) {

      // make sure we have an error
      err.should.be.a.String;

      done();

    })

  })

})