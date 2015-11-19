// Common curl library

module.exports = function(method, endpoint, opts, callback) {

  var logger = require('./logger.js');

  // 1. Build up params and use request to do the request

  // 2. If request returns an error, call /request/fail on the logger
  //    and callback with the error

  // 3. If request returns no error but the response is not an object, call /request/fail on the logger
  //    and callback with an error message "Unexpected response from <full host+endpoint>"

  // 4. If request returns with a response code that is not 200 then callback with the body of the response
  //    as the error (data is null)

  // 4. If request returns with a response code that is  200 then callback with the body of the response
  //    as the data (error is null)

}