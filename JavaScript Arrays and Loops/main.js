// 1. Introduction to Arrays
let fruits = ['strawberry', 'peach', 'mango']
console.log(fruits)

let numbers = [1,2,3,4,5]
console.log(numbers)

// mixed data types
let mixedArr = [true, 'mixed', 10]
console.log(mixedArr)



// 2. Common Array Methods

//.push(): adds element to the end of an array
fruits.push('raspberry')
console.log(fruits)


//.pop() removes the last element
fruits.pop()
console.log(fruits)


//.shift() removes the first element
fruits.shift()
console.log(fruits)


//.unshift() adds element to the beginning
fruits.unshift('orange')
console.log(fruits)


// .slice() gets elements in-between a start and end index
let slicedArr = fruits.slice(1)
console.log(slicedArr)


// .indexOf() gets index of a specified value
console.log(fruits.indexOf('mango'))

// .includes() returns a boolean value based on if the value is in the array
console.log(fruits.includes('peach'))



// 2. Introduction to Loops

// for loop (Older Way, but still used today)
for(let i=0;i<5;i++){
    console.log(i)
}

// for loop with array
console.log(fruits)
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}


// for-of loop: loops values in array (Newer way)
for(let fruit of fruits){
    console.log(fruit)
}


// for-in loop: loops indicies in array
for(let i in fruits){
    console.log(Number(i))
}


// while loop
let counter = 0
while(counter < 5){
    console.log(counter)
    counter++
}


// while loop with arrays
let i = 0
while (i < fruits.length ) {
    console.log(fruits[i])
    i++
}