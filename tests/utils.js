var _ 		= require('underscore');

// Useful functions for testing with

var randomString = function(length) {

  var chars = _.shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321".split("")).join("");

  var randomString = '';

  var i = 1;
  do {
    randomString += _.shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321".split(""))[0];
    i++;
  } while (i <= length);

  return randomString;

}

var randomNumber = function(length) {

  var numbers = _.shuffle("0987654321".split("")).join("");

  return parseInt(numbers.substr(0, length));

}

module.exports = {
  randomString: randomString,
  randomNumber: randomNumber
}
