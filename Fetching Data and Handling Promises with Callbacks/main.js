// Fetching Data and Handling Promises with Callbacks

// What is a promise? Manageable way to handle async tasks.
// Handle promise with .then(), .catch()
// 3 states: pending, resolved, and rejected

// caching the dom
const pokeForm = document.querySelector('form')
const pokeCardImage = document.querySelector('img')
const pokeCardName = document.querySelector('h5')

// fetch to pokemon api using fetch API and .then(), .catch() callbacks
const getPokemon = (pokeName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        pokeCardImage.src = data.sprites.front_default
        pokeCardName.textContent = data.name
    })
    // .catch() only runs on errors
    .catch((error) => {
        console.log(error)
})}

pokeForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const pokeInput = document.querySelector('#pokeInput').value
    getPokemon(pokeInput)
})


