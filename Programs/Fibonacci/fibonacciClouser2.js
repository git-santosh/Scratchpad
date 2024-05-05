function fibonacci() {
    // Create a static variable to store the previous two numbers
    let previous = [0, 1];
  
    // Return a function that calculates the next Fibonacci number
    return function() {
      // Get the next Fibonacci number
      const next = previous[0] + previous[1];
  
      // Update the previous two numbers
      previous = [previous[1], next];
  
      // Return the next Fibonacci number
      return next;
    };
  }
  
  // Create a new Fibonacci sequence generator
  const fibonacciGenerator = fibonacci();
  
  // Get the first few Fibonacci numbers
  console.log(fibonacciGenerator()); // 0
  console.log(fibonacciGenerator()); // 1
  console.log(fibonacciGenerator()); // 1
  console.log(fibonacciGenerator()); // 2
  console.log(fibonacciGenerator()); // 3