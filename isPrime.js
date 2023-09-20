let num = 1;
let isPrime = true;

for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime && num > 1) {
    console.log("Given Num is a Prime Num");
} else {
    console.log("Given Num is not a Prime Num");
}
