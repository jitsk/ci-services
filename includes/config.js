
module.exports = function(service) {

  // required libraries
  var argv = require('optimist').argv;
  var _ = require('underscore');

  // get our env, with a default
  var env = argv.env || "dev";

  // load config
  var config = require('../configs/geocoder.json')[env];

  // make sur eit loaded ok
  if ( !_.isObject(config) ) {
    throw new Error("Config not loaded for this env")
  }

  // return
  return config;

}