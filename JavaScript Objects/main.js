// 1. Introduction to JavaScript Objects: Collections of key-value pairs
const user = {
    firstName: 'Christian',
    age: 99,
    occupation: 'Instructor'
}

// 2. Accessing Objects with Bracket & Dot Notation
console.log(user['name'])
console.log(user.name)


// 3. Modifying Objects
// Adding Property: Creates a new key-value pair if the selected property doesn't exist
user.location = 'USA'
console.log(user)


// Updating Property: Modify existing property
user.age = 29
console.log(user)


// Delete Property: Remove property with "delete" keyword
delete user.occupation
console.log(user)




// 4. Methods in Objects
const car = {
    make: 'Jeep',
    model: 'Gladiator',
    year: 2020,
    start() {
        console.log('Jeep Started! Warming up now!')
    }
}

// calling method
car.start()
console.log(car)




// 5. Iterating Over Objects

// Use for...in loop to iterate over keys.
// NOTE: When trying to get value from key, must use bracket notation.
for(let key in car){
    console.log(car[key])
}


// Use Object Methods to Iterate (Object.keys(), Object.values(), Object.entries())
Object.keys(car).forEach((key) => {
    console.log(key)
})

Object.values(car).forEach((value) => {
    console.log(value)
})

Object.entries(car).forEach((entry) => {
    console.log(entry)
})


// 6. Nested Objects
const person = {
    name: 'Amilcar',
    address: {
        city: 'Atlanta',
        zip: 90001
    }
}
// parsing into nested object
console.log(person.address.city)
console.log(person['address']['city'])


// adding state to nested person object
person.address.state = 'Georgia'
console.log(person)




// 7. Object Destructuring: Extract properties from objects
// Basic Destructuring
const { firstName, age } = user
console.log(firstName)
console.log(age)


// Nested Destructuring
const { address: { city, zip } } = person
console.log(city, zip)