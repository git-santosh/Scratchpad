function person(data){
	for(var key in data){
		this[key] = data[key];
	}
	// this.getKeys = function(){
	// 	return Object.keys(this);
	// }
	//Arrow function for this.getKeys()
	this.getKeys =()=>{
		return Object.keys(this);
	}
}
var santosh = new person({name:'santosh',role:'Developer'});
console.log('santosh keys ',santosh.getKeys());

var getKeys = santosh.getKeys;

console.log(getKeys);