//coding challenges:

//write a program that out put the phrase "hello " to the cosole 

//console.log("hello");


//questionn 2//

/*write a program to print this :                                                                                                                                                             My Name is "your name "                                                                                                                                                                                                                                                                                          i am learning javascript via full stack Bootcamp of Dia TEC                                                                                                 I will become the best developer by hard work.                                                                                                                         I am making committment to do code with consistency.
                                                                            
i am learning javascript via full stack Bootcamp of Dia TEC       
                                                                                       
I will become the best developer by hard work.     
                                                                                                             
I am making committment to do code with consistency.*/


/*console.log(`My Name is "Rfiq"`);
console.log("I am learning JavaScript via full stack Bootcamp of Dia TEC");
console.log("I will become the best developer by hard work.");
console.log("I am making commitment to do code with consistency.");*/


//variables//

/*write a program that declare two variable one with your name and one with a number  
value of your age.concentrate the two variable and 
output the result to the console.*/

/*const myName = "Rafiq";
const myAge = 24;
console.log(`My name is ${myName} and I am ${myAge} years old.`);*/

// question 3//

/*repeat the coding task 2 out put by putting these string in variable
 and output the result to the console*/


/*const nameString = "My Name is ";
const name = "Rafiq";
const learningString = "I am learning JavaScript via full stack Bootcamp of Dia TEC";
const futureString = "I will become the best developer by hard work.";
const commitmentString = "I am making commitment to do code with consistency.";

console.log(`${nameString}"${name}"`);
console.log(learningString);
console.log(futureString);
console.log(commitmentString);*/


//question:3initialize two variable and output their sum, minus, multiply and division//

// Variables ko initialize karo
/*let a  = 10;
let b = 5;

// Sum nikalo
let sumResult = a + b;

// Minus nikalo
let minusResult = a - b;

// Multiply nikalo
 let multiplyResult = a * b;

// Division nikalo
let divisionResult = a / b;

// Result ko console mein print karo
console.log("Sum:", sumResult);
console.log("Minus:", minusResult);
console.log("Multiply:", multiplyResult);
console.log("Division:", divisionResult);*/


/// if else and logical  operator statemnets//

// NOTE: dear sir is sawal li mje bikul samaj nhe ayi chat gpt sy kia hae leka samaj phir b nhe ayi//

 /*use the BMI example from challenge # 1 and the code you
 already wrote and improve it.                                        
    your task.                           
                                                                 
    1 print a nice output to the console saying who has the higher BMI .
    the message is either "Mark's BMI is higher then john 's  orjohm's  BMI is higher then mark's!"   
                                                                                         
    2 use a template  literal to include the BMI values in the outputs. 
                                                                                                      
    Example: "Marks BMI(28.3) is higher then john's (23.9)!" */

    /*# BMI Calculator
# Formula: BMI = weight (kg) / (height(m))^2

# Function to calculate BMI
def calculate_bmi(weight, height):
    return weight / (height ** 2)

# Function to compare BMIs and print result
def compare_bmi(mark_weight, mark_height, john_weight, john_height):
    mark_bmi = calculate_bmi(mark_weight, mark_height)
    john_bmi = calculate_bmi(john_weight, john_height)
    
    if mark_bmi > john_bmi:
        print(f"Mark ka BMI ({mark_bmi:.1f}) John ke BMI ({john_bmi:.1f}) se zyada hai!")
    elif mark_bmi < john_bmi:
        print(f"John ka BMI ({john_bmi:.1f}) Mark ke BMI ({mark_bmi:.1f}) se zyada hai!")
    else:
        print("Mark aur John ka BMI barabar hai!")

# Example usage
mark_weight = 70  # kilogram mein
mark_height = 1.75  # meter mein
john_weight = 65  # kilogram mein
john_height = 1.80  # meter mein

compare_bmi(mark_weight, mark_height, john_weight, john_height)*/



// question 2 part 1 //
/* write a program that take ina a user age as input and output whether
 the user is old enough to vote (i.e, 18 year old or elser). */

 /*let age = prompt("Please enter your age:");

if (age >= 18) {
    console.log("You are old enough to vote.");
} else {
    console.log("Sorry, you are not old enough to vote yet.");
}*/


//question:3//
 /*write a program that take in a user's age as input and output whether the user is baby(0-2 year old),
 (3-5 year old), a child (6-12 year old),teenager(13-18 year old),or an aduld(19 year old or older).*/

 /*let age = prompt("Please enter your age:");

if (age >= 0 && age <= 2) {
    console.log("You are a baby.");
} else if (age >= 3 && age <= 5) {
    console.log("You are a toddler.");
} else if (age >= 6 && age <= 12) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 18) {
    console.log("You are a teenager.");
} else if (age >= 19) {
    console.log("You are an adult.");
} else {
    console.log("Please enter a valid age.");
}
*/

// question 4//

/*write a program that take in a user grade as input (e.g"A" , "B",  "C" , "D", "E", "F",) and output
  a meesage based on their grade . for example, if the user enter "A"  
  the program could output "great job"*/

 /* let grade = prompt("Please enter your grade (A, B, C, D, E, F):");

if (grade.toUpperCase() === "A") {
    console.log("Great job!");
} else if (grade.toUpperCase() === "B") {
    console.log("Well done!");
} else if (grade.toUpperCase() === "C") {
    console.log("Good effort!");
} else if (grade.toUpperCase() === "D") {
    console.log("You passed!");
} else if (grade.toUpperCase() === "E") {
    console.log("Try harder next time!");
} else if (grade.toUpperCase() === "F") {
    console.log("You need to improve!");
} else {
    console.log("Invalid grade. Please enter a valid grade ");
}*/

// question 4//

/*Sure, here's a simple JavaScript program that takes the user's number as input
 and outputs whether the number is positive or negative:*/

 /*let number = prompt("Please enter a number:");

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}*/

    /// LOOPS//
    //write a program that user a for loop to output the number from 1 to 10 to the console//

    /*for (let i = 1; i <= 10; i++) {
        console.log(i);
    }*/

    //question 2//

    //write a program that uses for loop to output the even numbers from 0 to 20 to the console.

    /*for (let i = 0; i <= 20; i += 2) {
        console.log(i);
    }*/

    // question 3//

    //write a program that uses for loop to output a the fibonacci sequence up to 20 number.

    // shuruaat mein 0 aur 1 se. Yani, sequence kuch is tarah hoti hai: 0, 1, 1, 2, 3, 5, 8, 13, 21, aur aagey.


   //0, 1, 1 (0 + 1), 2 (1 + 1), 3 (1 + 2), 5 (2 + 3), 8 (3 + 5), 13 (5 + 8), 21 (8 + 13), aur aise hi aagey

    /*let fibSeq = [0, 1]; 
for (let i = 2; i < 20; i++) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2]; 
}


for (let i = 0; i < 20; i++) {
    console.log(fibSeq[i]);
}*/

//question 4//

//write a program rhat uses for loop to output a multiplication table for certain number 
//enter by the user .for example , if the user enter 5 the program  could output 


/*const number = parseInt(prompt("Enter a number:"));

console.log(`Multiplication table for ${number}:`);
for (let i = 1; i <= 10; i++) {
    console.log(number * i);
}*/




// Note is sawal ki hal samaj ayi q k previous aur current value ko add krna hota hae pr last paragraph ki samaj nhea ayi chat gpt ki help li
/*loop
  const data = [
    { dolphinScores: [96, 108, 89], kolaScores: [89, 91, 110] },
    { dolphinScores: [97, 112, 101], kolaScores: [109, 95, 123] },
    { dolphinScores: [97, 112, 101], kolaScores: [109, 95, 106] }
];

const calculateAverage = (scores) => {
    const sum = scores.reduce((acc, cur) => acc + cur, 0);
    return sum / scores.length;
};

const determineWinner = (dolphinAverage, kolaAverage) => {
    if (dolphinAverage > kolaAverage) {
        return "Dolphins";
    } else if (kolaAverage > dolphinAverage) {
        return "Kolas";
    } else {
        return "Draw"; // If average scores are equal
    }
};

for (let i = 0; i < data.length; i++) {
    const dolphinAverage = calculateAverage(data[i].dolphinScores);
    const kolaAverage = calculateAverage(data[i].kolaScores);
    console.log(`Data ${i + 1} Winner:`, determineWinner(dolphinAverage, kolaAverage));





   // ES 6  challenge//

//write a program take an array of number an arguments and use the map methode to return a
// new array containnig the square of each naumber the orignal array. //

/*map methode

function squareArray (arr){
    return arr.map(num => num*num);
}

const numbers = [1,2,3,4,5,6];
const squareNumbers = squareArray(numbers);
console.log(squareNumbers);*/


 /* 2nd methode of question 1

  let nums = [1,2,3,4,5,6];

   let newArr = nums.map((val)=> {
    return val * val;
   });

   console.log(newArr);*/






/* question
write a program that takes an array of object representing books, with properties for
 little and authors 
and use the map methode to return a new array containing just the little of the books.



const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" }
];
function getTitles(books) {

    return books.map(book => book.title);
}


const titles = getTitles(books);
console.log(titles);*/

///// filter methode////

/*write a program that take an array of number as
 an argument and use the filter methode to return a new array containing only the even
  number from the orignal way.
  ab isko asan kr k dena

  let  arr =[1,2,3,4,5,6,7,12,46];

 let evenArr = arr.filter((val) => {
    return val % 2 === 0;
  });

  console.log(evenArr);*/

  // question 2//
  /*write a program that take an array of object representing book with properties for
   title and Author, and use the filter methode to return anew array
   containning only the book with more than 300 pages.*/

   
  /*let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
    { title: "1984", author: "George Orwell", pages: 328 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 224 },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 279 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310 }
];


let longBooks = books.filter(book => book.pages > 300);


console.log(longBooks);*/

    

    //Reduce Methode//

   // write a program that take an array of number as an argument and use the reduce methode
    // to return the sum of all number in the array//

/*    
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


console.log("The sum of all numbers:", sum);*/


// question 2//

 /*write a program that take an array of object representing book with properties for
 title and author an use the reduce method to return

the total number of page in all books*/


/*let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
    { title: "1984", author: "George Orwell", pages: 328 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 224 },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 279 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310 }
];


let totalPages = books.reduce((total, book) => total + book.pages, 0);


console.log("Total number of pages in all books:", totalPages);*/







































































  