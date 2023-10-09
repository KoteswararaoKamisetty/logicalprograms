function rearrangeMaxMin(arr) {
    // arr.sort((a, b) => a - b); // Step 1: Sort in ascending order
    
    for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length -i-1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

    let low = 0;
    let high = arr.length - 1;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(arr[high]);
            high--;
        } else {
            result.push(arr[low]);
            low++;
        }
    }

    return result;
}

let arr = [9, 3, 5, 7, 2, 4, 6, 8];
let rearrangedArray = rearrangeMaxMin(arr);
console.log(rearrangedArray);

