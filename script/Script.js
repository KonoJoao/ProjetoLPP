const nomePokemon = document.querySelector(".nomePokemon");
const numeroPokemon = document.querySelector(".numeroPokemon");
const imagemPokemon = document.querySelector(".imagemDoPokemon");
const formularioNomePokemon = document.querySelector(".formulario");
const paginaPokemon = document.querySelector(".linkPaginaPokemon");
const entrada = document.querySelector(".input_search");
const slotsPokemon = [document.querySelector(".pokemon1"), document.querySelector(".pokemon2"), document.querySelector(".pokemon3"), document.querySelector(".pokemon4"), document.querySelector(".pokemon5"), document.querySelector(".pokemon6")]

var arrayPokemons = [];
var i=0;

const adicionarPokemon = async () => {
    var dadosPoke = await pegarDadosPokemon(nomePokemon.innerHTML);
    console.log("deu");

    arrayPokemons[i] = dadosPoke;
    arrayPokemons.length = 6;
    
    await adicionarPokemonNaBarra(dadosPoke);

    i++;

    if(i==6){
        i=0;
    }

}

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
    paginaPokemon.href = `https://www.pokemon.com/br/pokedex/${dados.name}`;
    if(dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] != null)
        imagemPokemon.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    else
        imagemPokemon.src = dados['sprites']['front_default'];
    
}

const adicionarPokemonNaBarra = async (pokemon) => {
    const dados = await pokemon;

    if(dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] != null)
    slotsPokemon[i].src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    else
    slotsPokemon[i].src = dados['sprites']['front_default'];
}

const verPokemonDaBarra = async (numeroPokemon) => {
    console.log(arrayPokemons[numeroPokemon].name);
    console.log(arrayPokemons);
    await adicionarPokemonNaTela(arrayPokemons[numeroPokemon].name);
}

const retirarPokemon = async () => {
    for(i=0;i<6;i++){
        slotsPokemon[i].src = "";
        arrayPokemons[i] = null;
    }
    i=0;
}

adicionarPokemonNaTela('riolu');

formularioNomePokemon.addEventListener("submit", (evento) => {
evento.preventDefault();

var parametroPokemon = entrada.value.toLowerCase();
entrada.value = "";
adicionarPokemonNaTela(parametroPokemon);

})