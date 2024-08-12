'use strict';

function submit(name,comment,reating){

	let data = {name,comment,reating};

	for(let key in data){
		console.log(key,'',data[key]);
	}
}
submit('Japanese','language',9);