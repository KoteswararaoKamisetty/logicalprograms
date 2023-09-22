const n = parseInt(prompt('Enter the number of rows: '));
let star = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    star = star + " ";
  }
  // printing star
  for (let k = 1; k <= i; k++) {
    star = star + '*';
  }
  star = star + "\n";
}
console.log(star);