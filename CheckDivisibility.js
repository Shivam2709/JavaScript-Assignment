function printNumber(arr) {
    for(let i =0; i < arr.length; i++) {
        if(arr[i] % 3 === 0 && arr[i] % 2 !== 0) {
            console.log(arr[i]);
        } else {
            continue;
        }
    }
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15];
printNumber(myArray);