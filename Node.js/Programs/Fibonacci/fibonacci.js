function Fibonacci(number) {
    // Array.from(Array(number).keys())
    let first = 0;
    let sec = 1;
    console.log(first);
    console.log(sec);
    while (first <= number) {
      lastTerm = first + sec;
      first = sec;
      sec = lastTerm;
      console.log(lastTerm);
    }
  }
  Fibonacci(12);