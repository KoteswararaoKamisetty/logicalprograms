const str = (prompt('Enter the text: '));;
let temp = '';
for(const char of str){
    temp = char + temp;
}
if(temp == str){
    console.log('Yes, Given string is a Palindrome');
}else{
    console.log('No, Given string is not a Palindrome');
}