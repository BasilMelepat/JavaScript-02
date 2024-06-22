// Finding sum of two numbers.
let num1 = Number(prompt("Enter the first number:")); 
let num2 = Number(prompt("Enter the second number:"));
let sum = num1+num2;
console.log(`1. The sum of ${num1} and ${num2} is: ${sum}`);


// Finding area of a rectangle.
const length = Number(prompt("Enter the length of the rectangle:"));
const width = Number(prompt("Enter the width of the rectangle:"));
const area = length*width;
console.log(`2. The area of the rectangle is ${area} square units.`);


// Checking voting eligiblity based on age.
let age = Number(prompt("Enter your age:"));
if (age >= 18) {
  console.log("3. You are eligible to vote.");
} else {
  console.log("3. You are not eligible to vote.");
}


// Checking passed or failed based on grade.
let grade = Number(prompt("Enter your grade percentage:"));
if (grade >= 60) {
  console.log("4. You passed.");
} else {
  console.log("4. You failed.");
}


// Checking the number is positive, negative, or zero.
let num = Number(prompt("Enter a number to check (+,-,0):"));
if (num > 0) {
  console.log("5. The number is positive.");
} else if (num < 0) {
  console.log("5. The number is negative.");
} else {
  console.log("5. The number is zero.");
}


// Checking the user is a child, teenager, adult, or senior based on age.
let userAge = Number(prompt("Enter your age:")); 
if (userAge>=0 && userAge<=12) {
    console.log("6. You are a child.");
    } else if (userAge>=13 && userAge<=19) {
    console.log("6. You are a teenager.");
    } else if (userAge>=20 && userAge<=59) {
    console.log("6. You are an adult.");
    } else if (userAge>=60) {
    console.log("6. You are a senior.");
    } else {
    console.log("6. Invalid age entered.");
}


// Find the square of each number in an array using a loop.
let input = prompt("Enter numbers separated by commas:");
if (!input) {
    alert("You didn't answer.. moving to next question");
    }
    else {
    // Spliting the input string into an array of numbers
    let array = input.split(",");
    // Checking if the input contains valid numbers
    let isValid = array.every(input => !isNaN(input));
    if(!isValid) {
    alert("You entered invalid numbers!");
    } 
    else {
    // Using let to define an array to store the squares
    let result = new Array(array.length);
    for(let i=0; i<array.length; i++) {
    result[i] = array[i]*array[i];
    }
    console.log(`7. The squares of the numbers are: ${result.join(", ")}`);
    }
}


// Program to find the sum of all the odd numbers for a given limit.
let limit = Number(prompt("Enter the limit:"));
let oddSum = 0;
for (let i = 1; i <= limit; i++) {
    if (i % 2 !== 0) {
    oddSum += i;
    }
}
console.log(`8. The sum of all odd numbers up to ${limit} is ${oddSum}.`);