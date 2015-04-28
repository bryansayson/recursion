// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

if (typeof(obj) === "number")
	return '' + obj + '';

if (typeof(obj) === "string")
	return '"' + obj + '"';

if (typeof(obj) === "boolean")
	return '' + obj + '';

if (Array.isArray(obj)) {
	var results = [];

	if (obj === []) {
		return '' + obj + '';
	}

	else {

	for (var i = 0; i < obj.length; i++) {
		results.push(stringifyJSON(obj[i]));
		}
	return '[' + results + ']';
		}
	}

if (typeof(obj) === "object")
	
	var result = [];

	if (obj === {undefined}) {
		return {undefined};
	}

	if (obj === null) {
		return '' + obj + '';
	}

	else {


	for (var x in obj) {
		if (obj[x] !== undefined) {
			if (obj[x] === null) {
				result.push(stringifyJSON(x) + ':' + null)
			}
			else { result.push(stringifyJSON(x) + ':' + stringifyJSON(obj[x]))
			}
		}
	}

	return '{' + result + '}';


	}
};
