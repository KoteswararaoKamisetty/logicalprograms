let firstNum = 9;
let secondNum = 5;

[secondNum, firstNum] = [firstNum, secondNum];

console.log(firstNum, secondNum);

let ary = [1, 5, 4,9, 3, 2];

for (let i = 0; i < ary.length; i++) {
    for (let j = i + 1; j < ary.length; j++) {
        if (ary[i] < ary[j]) {
            [ary[i], ary[j]] = [ary[j], ary[i]];
        }
    }
}

console.log(ary);