
function compute_intersection(arr1, arr2, callback) {
// let's break up the bigger of the two arrays
console.log('initilize the function 1');
		var bigger = arr1.length > arr2.length ? arr1 : arr2;
		var smaller = bigger == arr1 ? arr2 : arr1;
		var biglen = bigger.length;
		var smlen = smaller.length;
		var sidx = 0; // starting index of any chunk
		var size = 10; // chunk size, can adjust!
		var results = []; // intermediate results
		// for each chunk of "size" elements in bigger, search through smaller
			function sub_compute_intersection() {
				for (var i = sidx; i < (sidx + size) && i < biglen; i++) {
					for (var j = 0; j < smlen; j++) {
						if (bigger[i] == smaller[j]) {
								results.push(smaller[j]);
								break;
						}
					}
			}
			//console.log('i value : '+i);
			//console.log('biglen vale value : '+biglen);
			if (i >= biglen)
			{
				console.log('initilize the callback 2');
				callback(null, results); // no error, send back results
			} 
			else 
			{
				console.log('process block 4');
				//console.log('sidex : '+sidx);
				//console.log('size  :'+size);
				sidx += size;
				process.nextTick(sub_compute_intersection);
			}
}
sub_compute_intersection();
}
var a1=[20,32,45,34,53,45,60,22,43,64,24,64,22,45,46,24];
var a2=[45,23,54,64,23,53,13,54,64,35,45,24,34,43,22,65,87,43,23,53,22,35,35,21];

compute_intersection(a1, a2, function(err, results) {
if (err) {
console.log(err);
} else {
console.log('before result 3\n')	
console.log(results);
}
});