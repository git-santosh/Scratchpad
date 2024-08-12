//if(!process.listeners('uncaughtException').length) throw e;
setTimeout(function(){
	console.log('I am late boomer');
},2000);
console.log('First thing is first.');
try{setTimeout(function(){//throw new Error('Oh..Cought it');
},4000);
}
catch(e){
	console.log('Error : '+e.message);
}
