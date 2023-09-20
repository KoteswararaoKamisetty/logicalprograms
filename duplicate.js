// Remove Duplicate Items from an Array

let ary = [4, 3, 2, 1, 3, 4, 8, 9];
let orgAry = [];

for (const value of ary) {
    let isDuplicate = false;
    for (const val of orgAry) {
        if (val === value) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        orgAry.push(value);
    }
}

console.log('Array:', orgAry);