const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon';
require('dotenv').config();

const getPokemons = async (req, res) => {
    try {
        console.log("Solicitando:", `${URL}`);
        const response = await axios.get(`${URL}?offset=0&limit=250`);
        const pokemonsApi = response.data.results.map((pokemon) => {
            return {
                name: pokemon.name,
                url: pokemon.url
            }
        });

        console.log("Respuesta de la API:", pokemonsApi);
        res.json(pokemonsApi);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send(error.message);
    }
}

module.exports = { getPokemons };
