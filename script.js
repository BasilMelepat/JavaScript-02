// 1. Function calculateFactorial (n).
function calculateFactorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers";
    if (n === 0) return "Factorial of 0 = 1";
    let factorial = 1;
    let calculationProcess = n.toString();
    for (let i = n; i > 1; i--) {
        factorial *= i;
        calculationProcess += " * " + (i - 1).toString();
    }
    calculationProcess += " = " + factorial.toString();
    return "Factorial of " + n.toString() + " = " + calculationProcess;
}
console.log(calculateFactorial(5));


// 2. Function to a variable called doubleArray.
const doubleArray = function(arr) {
    return arr.map(num => num * 2);
};
console.log("Double [1, 2, 3, 4]:", doubleArray([1, 2, 3, 4]));

// 3. Function that takes one number as a parameter and returns its factorial.
let factorial = function(n) {
    if (n < 0) return -1;
    if (n === 0) return 1;
    let factorial = 1;
    for (let i = n; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
};
console.log("Factorial of 6:", factorial(6));

// 4. Function processArray that takes an array and a callback function as parameters.
function processArray(arr, callback) {
    return arr.map(callback);
}
let result = processArray([5, 6, 7, 8], function(num) {
    return num * 2;
    });
console.log("Processed array of [5, 6, 7, 8] is:", result);