console.log("1"+2+3);          // 123
console.log(1+2+"3"+4);        // 334
console.log(1+"2"+3+4);        // 1234

let arr = [0,0,1,0,1,2,3,2]; // output like : [3, 2, 2, 1, 1, 0, 0, 0]
let max = arr[0];

for(let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[i] < arr[j]){
              [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}
console.log(arr);  // [3, 2, 2, 1, 1, 0, 0, 0]