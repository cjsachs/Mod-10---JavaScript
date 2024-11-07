// 1. Introduction to JavaScript Basics

// What is JavaScript? Client Side Programming language primarily used to make web pages interactive. Alongside HTML and CSS, it forms the core technologies for building websites.
// HTML: Structures Content, CSS: Styles, JavaScript: Adding dynamic behavior & interactivity
// Can use Node to write server-side code with JavaScript
console.log('testing');
// NOTE: Use semi-colons at the end of each statement... or not.

// Basic Data Types
let name = 'christian'; // string
let age = 29; // number
let isStudent = true // boolean
let job; // undefined
let address = null // null



// 2. Variables & Assignment

// Declaring Variables
var city = 'New York'

// Assingment & Reassignment
// let: allows for re-assignment
let score = 0
score = 10

// const: cannot re-assign values
const birthYear = 1995;
// birthYear = 2020 // Error: Assignment to constant variable



// 3. Operators

// Arithmetic Operators (+, -, *, /, %)
let a = 10
let b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(Math.floor(10/3))

// Comparison Operators (==, ===, !=, !==)
let x = 5;
let y = '5'
console.log(x == y) // true
console.log(x === y) // false
console.log(x != y) // false
console.log(x !== y) // true

// Logical Operators (&&(AND), ||(OR), !(NOT))
let isAdult = true
let hasID = false;

console.log(isAdult && hasID) // false
console.log(isAdult || hasID) // true
console.log(!isAdult) // false


// 4. Conditionals

// if statement
let temp = 90

if (temp > 80) {
    console.log('its hot')
}


// else if, else
let grade = 55

if (grade >= 90) {
    console.log('Grade: A')
} else if (grade >= 80) {
    console.log('Grade: B')
} else if (grade >= 70) {
    console.log('Grade: C')
} else if (grade >= 60) {
    console.log('Grade: D')
} else {
    console.log('Grade: F')
}


// Nested Conditionals
age = 15;
let hasLicense = false;

if (age >= 18){
    if (hasLicense) {
        console.log('You can Drive!')
    } else {
        console.log('You need a license first!')
    }
} else {
    console.log('You are to young to drive!')
}


// Using Switch Statements for multiple conditions
let day = 'Saturday'

switch (day) {
    case 'Monday':
        console.log('Its the beginning of the week!')
        break
    case 'Tuesday':
        console.log('Its Tuesday, Almost the middle of the week!')
        break
    case 'Wednesday':
        console.log('Officially the middle fo the week!')
        break
    case 'Thursday':
        console.log('Almost FRIDAYYYYY')
        break
    case 'Friday':
        console.log('ITS FRIDAY, LETS GOOOOOOO!')
        break
    default:
        console.log('Its the weekend!')
        break
}