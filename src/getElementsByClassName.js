// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  var domNodes = document.childNodes;
  var foundElems = new Array();
  
  function checkRecursiveley(domNodes, className){
    for(var i=0;i<domNodes.length;i++){
      var domNode = domNodes[i];
      if (domNode.className != null || domNode.className != undefined) {
        var nodeClasses = domNode.className.split(" ");
        
        if(nodeClasses.indexOf(className) != -1) {
          foundElems.push(domNode);
        }
        if(domNode.childNodes.length > 0){
          checkRecursiveley(domNode.childNodes, className);
        }
      }
    }
  }
  checkRecursiveley(domNodes, className);
  
  return foundElems;

};

