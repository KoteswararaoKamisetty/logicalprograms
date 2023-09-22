const n = parseInt(prompt('Enter the text: '));
let star = ""
for ( a =1; a<=n; a++ ) {
  for ( b =1; b<=a; b++ ){
    star = star+ '*'
  }
  star = star+"\n"
}
console.log(star);