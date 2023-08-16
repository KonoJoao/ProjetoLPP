const nomePokemon = document.querySelector(".nomePokemon");
const numeroPokemon = document.querySelector(".numeroPokemon");
const imagemPokemon = document.querySelector(".imagemDoPokemon");
const formularioNomePokemon = document.querySelector(".formulario");
const entrada = document.querySelector(".input_search");

const pegarDadosPokemon = async (pokemon) => {
    const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dados = await respostaAPI.json();

    console.log(dados);

    return dados;
}

const adicionarPokemonNaTela = async (pokemon) => {
    const dados = await pegarDadosPokemon(pokemon);

    nomePokemon.innerHTML = dados.name;
    numeroPokemon.innerHTML = dados.id;
    if(dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] != null)
        imagemPokemon.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    else
        imagemPokemon.src = dados['sprites']['front_default'];
    
}

adicionarPokemonNaTela('riolu');

formularioNomePokemon.addEventListener("submit", (evento) => {
evento.preventDefault();

var parametroPokemon = entrada.value.toLowerCase();
entrada.value = "";
adicionarPokemonNaTela(parametroPokemon);

})