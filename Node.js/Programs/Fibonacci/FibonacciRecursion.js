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

// 2rd example
//In programming, a recursive function is a function that calls itself, either directly or indirectly. This can be used to solve complex problems by breaking them down into smaller, simpler parts. For example, if you wanted to calculate the factorial of a number, you could use a recursive function to do so.
function fibonacci(n) {
  // Base case
  if (n === 0 || n === 1) {
    return n;
  }
  // Recursive case
  else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

fibonacci(12)