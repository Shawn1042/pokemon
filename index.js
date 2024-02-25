function toggleMenu() {
    var nav = document.getElementById("navbar");
    var hamburger = document.getElementById("hamburger-menu");
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
}





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