var material =["steel","plastic","copper","metal"];
var materialLength1 = material.map(function(material){
	return material.length;
});
console.log(materialLength1);

var materialLength2 = material.map((material) =>{
	return material.length;
});

console.log('Arrow function ',materialLength2);

var materialLength3 = material.map(material => material.length);

console.log('Arrow function ',materialLength3);