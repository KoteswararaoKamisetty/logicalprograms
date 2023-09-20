let fact = 1;
function factorial(n) {
  if(n > 0) {
   fact = n * fact;
   factorial(n - 1); // Moved inside the if block
  }
}

factorial(5);
console.log(fact); // Output: 120