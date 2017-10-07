let async = require('async');

let stack = [];

let A = function (cb){
	cb(null,"A");
}

let B = function (cb){
	cb(null,"B");
}

let C =function (cb){
	cb(null,"C");
}

stack.push(A);
stack.push(B);
stack.push(C);
console.log(stack);	
async.parallel(stack,function(err, result){
	console.log(result);
});

let obj = {};

obj.fullName = function (cb){
	let obj = {};
	obj.fName = "Santosh";
	obj.lName = "Suryawanshi";
	cb(null,obj);
};

obj.gender = function (cb){
	let gender = "Male"
	cb(null,gender);

};

obj.occupation = function (cb){
	let obj = {};
	obj.professional = "Software Enginner";
	obj.naturally = "Teacher";
	cb(null,obj);
};


async.parallel(obj,function(err,result	){
	console.log(result);
})