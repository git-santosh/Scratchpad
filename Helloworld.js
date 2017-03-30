console.log('hello World from BRG !!');
var bigNumber = Number.MAX_VALUE * 2;
console.log(bigNumber);
if (bigNumber == Number.POSITIVE_INFINITY) {
 // bigNumber = returnFinite();
  console.log(bigNumber);
}


var dice ={
	roll : function diceRoll(){
		var sides=6;
		console.log('random no '+Math.random());
		var randomNumber=Math.floor(Math.random()*sides)+1;
		console.log(randomNumber);
} 
}
