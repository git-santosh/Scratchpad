var items=[];
function addItem(name,price){
	items.push({
			name:name,
			price:price
	});
}

exports.total= function(){
	return items.reduce(function(a,b){
		return a+b.price;
},0);
};

exports.addItem=addItem;
//exports.total=total;


exports.ModuleCart=function(){

}