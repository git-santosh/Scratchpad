//with Recursion
let v1 = 0,
    v2 = 1,
    v3;
function printFibonacci(number) {
  
  if (number > 0) {
    v3 = v1 + v2;
    v1 = v2;
    v2 = v3;
    console.log(v3);
    printFibonacci(number - 1);
  }
}

console.log(v1)
console.log(v2)
printFibonacci(10);
