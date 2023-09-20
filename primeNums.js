// Range 1 to 100

function findPrimesInRange(start, end) {
    let primes = [];

    for (let num = start; num <= end; num++) {
        if (num < 2) continue;

        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(num);
        }
    }

    return primes;
}

let startRange = 1;
let endRange = 100;
let primeNumbers = findPrimesInRange(startRange, endRange);

console.log(`Prime numbers between ${startRange} and ${endRange}:`);
console.log(primeNumbers);