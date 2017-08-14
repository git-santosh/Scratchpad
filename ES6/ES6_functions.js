//Array destructuring
console.log('Array destructuring');
var numbers = [10,20];
var [n1,n2] = numbers; // destructuring

console.log(n1 + ' '+n2);


//Object destructuring
console.log('Object destructuring');
var position = {x:50 ,y:100};
var {x,y}= position;

console.log(x+' '+y);

//Using the iterable interface of an array

var array = [1, 2];
var iterator = array[Symbol.iterator]();
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: undefined, done: true}