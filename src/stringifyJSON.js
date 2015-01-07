// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  var result;
  
  if(typeof obj === "number" ||
    (typeof obj === "boolean")){
    return obj.toString();
  }else if(typeof obj === "string") {
    return '"' + obj + '"';
  }else if(obj === null){ 
    return 'null';
  }else if(obj === undefined){
    return null;
  }else if(Array.isArray(obj)){
    result = "["; 
    obj.forEach(function(item, index, arr){
      result += stringifyJSON(item);
      if(index < arr.length - 1){
        result += ","; 
      }
    });
    result += "]";
    return result;
  }else if(Object.prototype.toString.call(obj) === "[object Object]"){
    result = "{";

    var keys = Object.keys(obj),
        len = keys.length,
        i = 0,
        prop;

     while (i < len) {
       prop = keys[i];
      if(typeof obj[prop] === "function" || obj[prop] === undefined){i+=1;}  
      else{
        result += "\"" + prop.toString() + "\":" + stringifyJSON(obj[prop]);
        i += 1;
        if(i < len){ result += ",";}
      } 
     }

     result += "}";
     return result;
  }

};
