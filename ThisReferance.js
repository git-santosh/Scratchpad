var sampleObject = function() {
 this.foo = 123;
}

sampleObject.prototype.getFoo = function() {
    
 var nested = function() {
     
  return this.foo;
 }
 return nested();
}

var test = new sampleObject();

window.alert(test.getFoo());
