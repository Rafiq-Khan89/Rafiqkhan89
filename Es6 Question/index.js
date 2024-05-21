//question 1 reverse a string
//input;"hello"
//output "olleh"

//ans
/*let inputString = "hello";

function reverseString(str){
    return str.split('').reverse().join('');

}

let outputString = reverseString(inputString);
console.log(outputString);*/

//2nd metthode of this question

/*let input = "hello";
function reverseString(str){
    let reverseString = "";
    for(let i = str.length - 1; i >= 0; i--){
        reverseString += str[i];
    }
    return reverseString;
}

let output = reverseString(input);

console.log(output);*/

//////////////////////////////////////

//question 2//
// check if a string is a palindrome
//input; "racecar"
// output; true
//input "hello"
//output;false
// NOTE sir is sawal  ki samaj nhe ayi mje

/// question 3

//find the factorial of a number
//input;5
//output;120

/*function factorial(n) {
    let factorialResult = 1; // Initialize kia
    for (let i = 1; i <= n; i++) {
        factorialResult *= i;
    }
    return factorialResult;
}

let number = 5;
let factorialResult = factorial(number);
console.log(factorialResult);*/

/////question4
//generate fibonacci sequence
// input 5
// output[0 ,1, 1, ,2,3]

/*function fibonacci(n) {
    let fibSeq = [];
    let a = 0, b = 1;
    fibSeq.push(a);
    fibSeq.push(b);
    for (let i = 2; i < n; i++) {
        let nextFib = a + b;
        fibSeq.push(nextFib);
        a = b;
        b = nextFib;
    }
    return fibSeq;
}*/

/////////////////// question:5

// find the maximum number in an array
//input;[1,2,3,4,5,]
//output;[5]

/*let arr=[1,2,3,4,5]
let max = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max)*/

//////////////question 6

/*let arr = [1, 2, 3, 4, 5];
let min = arr[0];

for (let i = 1; i < arr.length; i++) { 
    if (arr[i] < min) {
        min = arr[i];
    }
}
 console.log(min);*/

// question 7
// sort array in aacending order

// let arr = [5, 3, 8, 1, 2];
// console.log("Unsorted Array:", arr);
// arr.sort((a, b) => a - b);
// console.log("Sorted Array:", arr);

// question 8


// descending order

// let arr = [5, 3, 8, 1, 2];
// console.log("Unsorted Array:", arr);
// arr.sort((a, b) => b - a);
// console.log("Sorted Array:", arr);

// question 9

// let arr1 =[1,3,5];

// let arr2 =[2,4,6];

// let arr3 = [...arr1,...arr2];

// console.log(arr3);

// arr3.sort((a, b) => a - b);

// console.log(arr3);

//// question 10
// check if number is prime 
//input:7 output true
//input:8 output false

/*function isPrime(num) {
    
 if (num <= 1) return false; 
    if (num <= 3) return true;  

    
     if (num % 2 === 0 || num % 3 === 0) return false;

    
     for (let i = 5; i * i <= num; i += 6) {
         if (num % i === 0 || num % (i + 2) === 0) return false;
 }
     return true;
 }


// console.log(isPrime(7)); // Output: true
// console.log(isPrime(8)); // Output: false*/
