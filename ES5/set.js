'use strict';
let classroom = new Set();
let santosh = { name : 'santosh', age:27},ganesh={name:'ganesh',age:25},kiran = {name:'kiran',age:21};
classroom.add(santosh);
classroom.add(ganesh);
classroom.add(kiran);

if(classroom.has(santosh)) console.log('santosh is in classroom');
if(classroom.has(ganesh)) console.log('ganesh is in classroom');
if(classroom.has(kiran)) console.log('kiran is in classroom');

console.log('classroom size :',classroom.size);

//create an array of an students from the classroom set 

let arrayOfStudent = Array.from(classroom);
console.log(arrayOfStudent);

//to create a set from an existing array 

let alumni = new Set(arrayOfStudent);
console.log('alumni size :',alumni.size);