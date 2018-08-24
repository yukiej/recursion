// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	return getElementsByClassNameHelper(className,document.body);
}

var getElementsByClassNameHelper = function(className, node) {
	var results = [];

  //use document.body to get the <body> element of the page
  //use element.childNodes to get list of the child nodes of body 
  //use element.classList to get the DOMTokenList collection of the class attributes of the element, which should be added to results.
  //do steps 2 and 3 recursively until there are no child nodes
  
  	var childNodes = node.childNodes;
  	if (node.classList !== undefined && node.classList.contains(className)){
  		results.push(node);	
  	}
  	if (childNodes !== undefined){
	  	for (var index = 0; index < childNodes.length; index++){
	  		var $child = childNodes[index];
	  		results = results.concat(getElementsByClassNameHelper(className,$child));
	  	}
	}
  	return results;
}
  
