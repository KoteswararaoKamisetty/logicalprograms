// Each word reverse in a given string
let str = "Welcome to Programiz!";
let eachWord = '';
let wordReverse = '';
    // Word reverse
let words = str.split(' ');

for(let char of words){
	eachWord = '';
  for(var i = 0; i < char.length; i++){
  	eachWord += char[char.length-1-i];
  }
  wordReverse += eachWord + " ";
}

console.log(wordReverse);
