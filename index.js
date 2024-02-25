function toggleMenu() {
    var nav = document.getElementById("navbar");
    var hamburger = document.getElementById("hamburger-menu");
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var container = document.querySelector('.container');
        var headerContainer = document.querySelector('.header-container');

        container.style.opacity = '0';

        setTimeout(function() {
            container.style.display = 'none';

            headerContainer.style.display = 'block';
            setTimeout(function() {
                headerContainer.style.opacity = '1';
            }, 100);

        }, 1000);
    }, 5000); 
});



async function fetchPokemon() {
    try{

        const pokemonName = document.querySelector("#pokemonName").value.toLowerCase()

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }

        const data = await response.json()
        const pokemonSprite = data["sprites"]["front_default"]
        const imgElement = document.getElementById("pokemonSprite")
        imgElement.src = pokemonSprite
        imgElement.style.display = "block"
    
    }
    catch(error){
        console.error(error)
    }
}