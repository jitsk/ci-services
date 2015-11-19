// Wrapper around the Logger microservice

module.exports = function(method, endpoint, opts, callback) {
  
  var _ = require('underscore');
  var request = require('request');
  var config = require('./config.js')('logger');

  // 1. Make a request to the endpoint on config.host
  //    This should NOT be done using a common curl library, please use native request

  // 2. Return the response if callback is supplied

}