let str = "Welcome to Programiz!";
let eachWord = '';
let wordReverse = '';
    // Word reverse
let words = str.split(' ');

for (const word of words) {
    eachWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        eachWord += word[i];
    }
    wordReverse += eachWord + " ";
}
console.log(wordReverse);