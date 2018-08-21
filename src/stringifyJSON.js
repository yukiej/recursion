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

  //if the object is a special value, return that special value stringified
  if ([null, false, true].includes(obj)){
  	return String(obj);
  };

  //if the object is an array, return the stuff inside, stringified, wrapped in (stringified) brackers
  if (_.isArray(obj)){
  	//Check for empty array
  	if (obj.length === 0){
  		return "[]";
  	} else{
  		var results = stringifyJSON(obj[0]);
  		var index = obj.length;
  		for (var i = 1; i < index; i++){
  			results = results + "," + stringifyJSON(obj[i]);
  		}
  		results = "[" + results + "]";
  		return results; 
  	};
  };

  //if the object is a non-array object
  if (_.isObject(obj)){
  	//Check for empty object
  	if (jQuery.isEmptyObject(obj)){
  		return "{}";
  	} else {
  		var keys = Object.keys(obj);
  		var firstProperty = '"' + keys[0] + '":'+ stringifyJSON(obj[keys[0]]);
  		var results = firstProperty;
  		for (var i = 1; i < keys.length; i++){
  			results = results + ',"' + keys[i] + '":'+stringifyJSON(obj[keys[i]]);
  		}
  		results = "{" + results + "}";
  		return results;
  	}
  };
}
