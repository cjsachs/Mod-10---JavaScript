// Intro to JavaScript Strings

//1. Declaring Strings
let singleQuote = 'This is a singled quoted string.'
let doubleQuote = "This is a double quoted string."

// formatted/literal string
let firstName = 'Christian'
let formattedString = `This is a formatted string and my name is... ${firstName}!`
console.log(formattedString)

// 2. String Methods
let testStr = '        Learning JavaScript String Methods and Functions!   '

// Length
console.log(testStr.length)

// Upper and Lower Case
console.log(testStr.toUpperCase())
console.log(testStr.toLowerCase())

// Slicing
console.log(testStr.slice(5, 20))


// Index Of
console.log(testStr.indexOf('Methods'))


// Includes, startsWith, endsWith
console.log(testStr.includes('String'))
console.log(testStr.startsWith('Learn'))
console.log(testStr.endsWith('tions!'))


// trim, replace
console.log(testStr)
console.log(testStr.trim())
console.log(testStr.replace('Learning', 'Mastering'))



// Intro to Functions (Function Declaration, Arrow Functions, Function Expression)

// Function Declaration
function greet(name){
    return `Hello my name is, ${name}`
}

console.log(greet('Sakura'))

// Arrow Function
const greet2 = (name) => `Hello my name again is, ${name}`
console.log(greet2('Amilcar'))

const square = (x) => x * x
console.log(square(3))

// Function Expression
const cubed = function(x){
    return x * x * x
}

console.log(cubed(3))