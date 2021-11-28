//tombol di klik
const triggerBtn = document.querySelector('button');
triggerBtn.addEventListener('click', () =>{
    showPokemon();
    // const cards = document.querySelector('.cards');
    // cards.classList.toggle('cards-hide');
});

// ambil data
function showPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response =>response.json())
    .then(response => {
       
       const pokemonData = response;
       let card =""; 
       const cards = card += showCard(pokemonData);
       const pokemonContainer = document.querySelector('.pokemon-container');
       pokemonContainer.innerHTML= cards;


    })
}



function showCard(pokemonData){
    return `<div class="cards">
                <p>${pokemonData.id}</p>
                <img src="${pokemonData.sprites.front_default}">
                <p>${pokemonData.name}</p>
                <p>${pokemonData.types[0].type.name}</p>
              

            </div>`
}
