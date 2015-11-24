
// include the libraries
var should = require('should');
var services = require('../../main.js');
var geocoder = services.geocoder;

describe('GET /geocode/address', function() {

  it('should geocode the address successfully', function(done) {

    // parameters
    var opts = {
      address1: "66 Tyne Road",
      town: "Redcar",
      county: "cleveland",
      postcode: "TS10 1PZ",
      country: "gb"
    }

    geocoder("get", "/geocode/address", opts, function(err, data) {

      // make sure we don't have an error
      (err === null).should.be.true;

      // make sure we have some data
      data.should.be.an.Object;

      done();

    })

  })

})