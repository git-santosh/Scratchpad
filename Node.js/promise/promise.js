
var promise = new Promise(function(resolve, reject){
	resolve(Math.PI)
	reject(0);
	resolve(Math.sqrt(-1));
});


promise.then(function(number){
	console.log('Number'+number);
});

// Equivalent ways to create a resolved promise

new Promise(function (resolve,reject){
	resolve('the long way');
});
Promise.resolve('the short way');



// Equivalent ways to create a rejected promise
new Promise(function (resolve, reject) {
reject('long rejection');
});
Promise.reject('short rejection');



//Passing value in a sequence of steps

Promise.resolve('saantosh entered into step 1 \n').then(function setp2(result){
	console.log('step 2 received \n '+result);
	return 'Greeting from setp 2';  // Explicit return value 
}).then(function step3(result1){
	console.log('step 3 received \n'+result1); // No explicit return value
}).then(function step4(result2){
	console.log('step 4 received \n'+result2);  
	return Promise.resolve('fulfilled value'); // return promise 
}).then(function step5(result3){
	console.log('step 5 received \n'+result3);
})