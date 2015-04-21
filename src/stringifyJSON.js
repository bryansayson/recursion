// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

if (typeof(obj) === "undefined")
	return undefined;

if (typeof(obj) === "null")
	return undefined;

if (typeof(obj) === "number" || typeof(obj) === "boolean")
	var string = "" + obj + "";
	return string;

if (typeof(obj) === "string")
	return '"' + obj + '"';

if (typeof(obj) === "array") {
	var results = [];
	for (var i = 0; i < obj.length; i++) {
		results.push(stringifyJSON(obj[i]));
		}
	return '[' + results + ']';
	}

if (typeof(obj) === "object")
	var results = [];
	for (var x in obj) {
		results.push(stringifyJSON(x) + ':' + obj[x])
		}
	return '{' + results.join(",") + '}';

};
