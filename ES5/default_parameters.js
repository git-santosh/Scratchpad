'use strict';

// we can give the default values in function parameter so that will dont have to write code into function 
// in case , if i pass a parameter into the functon and if i want to use first name as default then 
//so we pass undefined to tell the interpreter to use default value.
function greet(name = 'santosh', timeOfDay = 'day'){
	//Default value in the function 
	// name= name || 'santosh';
	// timeOfDay = timeOfDay || 'Day';
	console.log(`Good ${timeOfDay} , ${name}`);
}
greet(undefined, 'Morning');
greet();