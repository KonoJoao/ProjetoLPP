const fetchPokemon = async (pokemon) => {
    const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dados = await respostaAPI.json();

    console.log(dados);
}

fetchPokemon("ditto");