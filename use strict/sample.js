"use strict";

//Benifits 

// 1) Duplicate keys in object

var person = {
    name:'santosh suryawanshi',
    edu:'BCA',
    natiality:'indian',
    age:'28',
    gender:'Male',
    edu:'MCA',
    
}

console.log(person); // It will override the value of edu BCA to MCA

//2) Variables without var

 person = "ganesh"
  console.log(person++); 

//3) Duplicate arguments
// function run(fromWhom, fromWhom){
//     alert(fromWhom);
// }
//run(1,2);

var i=1;
console.log(i);
i="a";
console.log(i);
i=i++;
console.log(i);