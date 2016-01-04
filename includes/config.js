
module.exports = function(service) {

  // required libraries
  var argv 	= require('optimist').argv;
  var _ 		= require('underscore');

  // get our env, with a default
  var env = argv.env || "dev";

  // load config
  if(_.isUndefined(service) || _.isEmpty(service)) {
  	throw new Error("Config not specified for this env");
  }
	  
	var config = require('../configs/' + service + '.json')[env];

	// make sure it loaded ok
	if(!_.isObject(config)) {
		throw new Error("Config not loaded for this env");
	}

  // return
  return config;

}