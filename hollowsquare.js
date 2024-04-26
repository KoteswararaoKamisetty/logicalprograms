// Steps to create a hollow square star pattern are:

// Create a variable to store the string and assign it with an empty string
// Create a for loop to run for 'n' number of times, where 'n' is number of rows/columns in the square, i.e for(let i = 0; i < n; i++)
// Inside the loop, create a for loop that prints a star (*) at the beginning and end of the line and space in between
// Also, keep in mind that the first and last row should have only stars
// Add a new line after each row


let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
