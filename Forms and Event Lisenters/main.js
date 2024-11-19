// 1. caching the form
const form = document.querySelector('form')
const myHeader = document.querySelector('#my-header')

// 2. adding the event listener
// Common Events: Submit, Click, Change, Input
// NOTE: You can add multiple events to an element
form.addEventListener('submit', (event) => {
    event.preventDefault()
    // test
    console.log('submitted')
    // grabbing form input values
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const emailHelp = document.querySelector('#emailHelp')
    console.log(email.value, password.value)
    
    // validation
    if (!email.value.includes('@gmail.com')){
        email.style.borderColor = 'red'
        emailHelp.textContent = 'We only use Gmail Emails HERE!'
        emailHelp.style.color = 'red'
        return
    } else {
        email.style.borderColor = 'green'
        password.style.borderColor = 'green'
        emailHelp.textContent = 'Success'
        emailHelp.style.color = 'green'
    }
    
    // log to console if everything is good
    console.log({'user': {
        'email': email.value,
        'password': password.value
    }})
})

myHeader.addEventListener('click', () => {
    console.log('im being clicked!')
})
 

