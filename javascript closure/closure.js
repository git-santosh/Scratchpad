
var person = (function(){
  var firstName ="santosh";
  var lastName ="suryawanshi";
  
  function getFullName(a,b){
    return a+' '+b;
  }
  return{
    FN:function(){
      return firstName;
    },
    LN:function(){
      return lastName;
    },
    GFN:function(){
         return getFullName(firstName,lastName)
    }
  }
})();

console.log(person.FN());
console.log(person.LN());
console.log(person.GFN());
