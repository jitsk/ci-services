// Common curl library

module.exports = function(method, endpoint, opts, callback) {

  // 1. Build up params and use request to do the request

  // 2. If request returns an error, call /request/fail on the logger
  //    and callback with the error

  // 3. If request returns no error but the response is not an object, call /request/fail on the logger
  //    and callback with an error message "Unexpected response from <full host+endpoint>"

  // 4. If request returns with a response code that is not 200 then callback with the body of the response
  //    as the error (data is null)

  // 4. If request returns with a response code that is  200 then callback with the body of the response
  //    as the data (error is null)

  var _ = require('underscore');
  var request = require('request');
  var logger = require('./logger.js');
  var crypto = require('crypto');
  var hostname  = require('os').hostname();

  // did we get passed too few params?
  if (_.isFunction(params)) {

    callback = params;
    params = null;

  }

  // malke our params
  var params = {
    method: method.toLowerCase(),
    url: endpoint
  }

  // do we need to add in the qs
  if (_.isObject(opts) && method.toLowerCase() === "get") {

    params.qs = opts;

  }

  // or add in a form?
  else if (_.isObject(opts)) {

    params.form = opts;

  }

  // add in our auth headers
  var header_hash = crypto.createHash('md5');
  header_hash.update("d3c1a83f6330cc73e5a726481f7c7abc"+hostname);
  var hash = header_hash.digest('hex');

  params.headers = {
    ciauth: hash,
    cihost: hostname
  }

  request(params, function(e, r, b) {

    // did we get an error back?
    if (e || !_.isObject(r)) {

      var error = e || new Error("Unexpected response from " + endpoint);

      var log = {
        data: opts,
        error: error,
        project: endpoint
      }

      logger("post", "/request/fail", log);

      return callback(error);

    }

    try {

      var body = JSON.parse(b);

    }

    catch(e) {

      var body = b;

    }

    // No request error, did we get anything but a 200?
    if (r.statusCode !== 200) {

      return callback(body);

    }

    // We got a 200 lets return that
    return callback(null, body);

  })

}