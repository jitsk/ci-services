// Wrapper around the Logger microservice

module.exports = function(method, endpoint, opts, callback) {
  
  var _ 			= require('underscore');
  var request = require('request');
  var config 	= require('./config.js')('logger');

  // 1. Make a request to the endpoint on config.host
  //    This should NOT be done using a common curl library, please use native request

  // 2. Return the response if callback is supplied

  // did we get passed too few params?
  if (_.isFunction(params)) {

    callback = params;
    params = null;

  }

  // malke our params
  var params = {
    method: method.toLowerCase(),
    url: config.host + endpoint
  }

  // do we need to add in the qs
  if (_.isObject(opts) && method.toLowerCase() === "get") {

    params.qs = opts;

  }

  // or add in a form?
  else if (_.isObject(opts)) {

    params.form = opts;

  }

  request(params, function(e, r, b) {

    // did we get an error back?
    if (e || !_.isObject(r)) {

      var error = e || new Error("Unexpected response from " + endpoint);

      return (_.isFunction(callback)?callback(error):null);

    }

    try {

      var body = JSON.parse(b);

    }

    catch(e) {

      var body = b;

    }

    // No request error, did we get anything but a 200?
    if (r.statusCode !== 200) {

      return (_.isFunction(callback)?callback(body):null);

    }

    // We got a 200 lets return that
    return (_.isFunction(callback)?callback(null, body):null);

  })

}