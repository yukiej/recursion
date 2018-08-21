// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // base case: if the object is a string, return it wrapped in quotes
  if (_.isString(obj)){
  	//return the string wrapped in quotes
  	return ('"' + obj + '"');
  };

  //if the object is a number, turn it into a string and return it
  if (_.isNumber(obj)){
  	//return the number turned into a string (no extra quotes tho)
  	return String(obj);
  };

  

  //
};
