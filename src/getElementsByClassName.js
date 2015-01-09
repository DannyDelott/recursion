// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(name){

  var elements = []; 
   
  (function getElements(node){

    if(node.className.indexOf(name) > -1){
      elements.push(node);    
    }
    
    if(node.hasChildNodes()){
      var  child = node.firstElementChild;
      while(child){
        getElements(child, name);
        child = child.nextElementSibling;
      } 
    }
  })(document.body, name);
  
  return elements;

};
