// Fetching Data and Handling Promises with Callbacks

// What is a promise? Manageable way to handle async tasks.
// Handle promise with .then(), .catch()
// 3 states: pending, resolved, and rejected

// caching the dom
const pokeForm = document.querySelector('form')
const userPokeImg = document.querySelector('#userPokeImg')
const userPokeName = document.querySelector('#userPokeName')
const userPokeCard = document.querySelector('#userPokeCard')
const enemyPokeImg = document.querySelector('#enemyPokeImg')
const enemyPokeName = document.querySelector('#enemyPokeName')
const enemyPokeCard = document.querySelector('#enemyPokeCard')
const btnContainer = document.querySelector('#btn-container')

// fetch to pokemon api using fetch API and .then(), .catch() callbacks
const getPokemon = (pokeName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        userPokeImg.src = data.sprites.front_default
        userPokeName.textContent = data.name
        // showing card when data is retrieved
        userPokeCard.style.display = ''
        createBattleBtn()
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

// create battle button function
const createBattleBtn = () => {
    const battleBtn = document.createElement('button')
    battleBtn.classList = 'btn btn-danger'
    battleBtn.textContent = 'Battle'
    battleBtn.id = 'battle-btn'
    if(!document.querySelector('#battle-btn')){
        btnContainer.append(battleBtn)
        battleBtn.addEventListener('click', getEnemyPoke)
    }
}

// create async function getEnemyPokemon
const getEnemyPoke = async () => {
    const randomPoke = Math.floor(Math.random() * 152)
    console.log(randomPoke)
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`)
        const data = await response.json()
        // manipulating dom with enemy pokemon data
        enemyPokeImg.src = data.sprites.front_default
        enemyPokeName.textContent = data.name
        // showing card when data is retrieved
        enemyPokeCard.style.display = ''
    } catch(err) {
        console.log(err)
    }
}


