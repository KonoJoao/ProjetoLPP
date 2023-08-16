const nomePokemon = document.querySelector(".nomePokemon");
const numeroPokemon = document.querySelector(".numeroPokemon");
const imagemPokemon = document.querySelector(".imagemDoPokemon");
const formularioNomePokemon = document.querySelector(".formulario");
const entrada = document.querySelector(".input_search");
const slotsPokemon = [document.querySelector(".pokemon1"), document.querySelector(".pokemon2"), document.querySelector(".pokemon3"), document.querySelector(".pokemon4"), document.querySelector(".pokemon5"), document.querySelector(".pokemon6")]

var arrayPokemons = [];
var i=0;

const adicionarPokemon = async () => {
    var dadosPoke = await pegarDadosPokemon(nomePokemon.innerHTML);
    console.log("deu");
    if(arrayPokemons.length%6 == 0 && arrayPokemons.length != 0){
    arrayPokemons.splice(i, 1, dadosPoke);
    adicionarPokemonNaBarra(dadosPoke);
    i++;
    } else {
        arrayPokemons.push(dadosPoke);
        adicionarPokemonNaBarra(dadosPoke);
    }
    if(i%6==0)
        i=0;

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

adicionarPokemonNaTela('riolu');

formularioNomePokemon.addEventListener("submit", (evento) => {
evento.preventDefault();

var parametroPokemon = entrada.value.toLowerCase();
entrada.value = "";
adicionarPokemonNaTela(parametroPokemon);

})