// Find out the max & min values from an array

let num = [1, 3, 5, 8, 29, 85, 0, 4];
let max = num[0];
let min = num[0];

for (const value of num) {
    max = value > max ? value : max;
    min = value < min ? value : min;
}

console.log('Max:', max);
console.log('Min:', min);