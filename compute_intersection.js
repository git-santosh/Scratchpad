function compute_intersection(arr1,arr2,callback){
var result=[];
console.log('initilize the function');
	for (var i =0; i < arr1.length; i++) {
		for (var j = 0; j < arr2.length; i++) {
			if(arr2[j]==arr1[i]){
				result[result.length]=arr2[j];
				console.log(result);	
				break;
			}
		}
	}
	
	
	callback(null,result);
	//console.log(result);
setTimeout(function(){process.nextTick(compute_intersection);},2000);
}

var a1=[20,32,45,34,53,45,60,22,43,64,24,64,22,45,46,24];
var a2=[45,23,54,64,23,53,13,54,64,35,45,24,34,43,22,65];

compute_intersection(a1,a2,function(err,results){
	console.log(results);
});

//compute_intersection(a1,a2);
