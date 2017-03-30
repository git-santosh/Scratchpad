var count=0;
/*function countBirds(){
	count+=1;
	return count+ ' Birds';
} */
function makeBirdCounter(){
	var count=0;
		return function(){
			count+=1;		
			return count+ ' Birds';
		}
	
}

function countDogs(){
	count+=1;
	return count+ ' Dogs';
}
