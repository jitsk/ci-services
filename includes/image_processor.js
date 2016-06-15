// Wrapper around the Image Processor microservice

module.exports = function(method, endpoint, opts, callback) {
  
  var _ 			= require('underscore');
  var config 	= require('./config.js')('image_processor');
  var curl 		= require('./curl.js');

  // 1. Make a request to 'endpoint' on config.host
  //    This should be done using a common curl library

  // 2. Return the response

   curl(method, config.host + endpoint, opts, function(err, data) {
  
    if (!_.isNull(err)) {   
    	return callback((!_.isUndefined(err.errors))?err.errors:["Problem with image processor response"], null);
    } else if (!_.isNull(data)) {
      return callback(null, (!_.isUndefined(data.data))?data.data:{});
    } else {
      return callback(["Problem with response from image processor"],null);
    }

  });

}