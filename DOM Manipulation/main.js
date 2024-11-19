// JavaScript DOM Manipulation

// 1. What is the DOM? Representation of an HTML document as a tree structure, allowing javascript to access and manipulate elements.

// 2. Selecting Elements with JS document methods

// Selecting by ID
const header = document.getElementById('h1')
console.log(header)


// Selecting by Class Name
const students = document.getElementsByClassName('student')
console.log(students)

// Selecting by Tag Name
const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)


// Selecting using querySelector (returns first match)
// NOTE: querySelector selects by css selector syntax.
const myButton = document.querySelector('.my-btn')
console.log(myButton)


// Selecting using querySelectorAll (returns a NodeList of all matches)
const allButtons = document.querySelectorAll('button')
console.log(allButtons)




// 3. Manipulating DOM Elements

// Updating Content (.innerHTML, .textContent)
myButton.textContent = 'THIS IS MY BUTTON'
header.innerHTML = '<p>This is a paragraph</p>'


// Modifying Styles
myButton.style.backgroundColor = '#cf8282'
myButton.style.padding = '10px'


// Adding and Removing Classes
// Add a class
header.classList.add('adding-class')

// Remove a class
header.classList.remove('adding-class')



// 4. Creating and Remove Elements

// Creating a New Element
const myDiv = document.createElement('div')
myDiv.textContent = 'Created this DIV from JavaScript'

const htmlDiv = document.querySelector('#html-div')

// append to the document body or a specific container
document.body.append(myDiv)
htmlDiv.append(myDiv)


// inserting an element before another
const myDivAgain = document.createElement('div')
myDivAgain.textContent = 'Adding this between 2 elements'

document.body.insertBefore(myDivAgain, htmlDiv)


// removing an element from the dom (.remove())
header.remove()