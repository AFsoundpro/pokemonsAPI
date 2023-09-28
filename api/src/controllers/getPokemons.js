const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon';
require('dotenv').config();
const size = 25;

const getPokemons = async (req, res) => {
    try {
        console.log('HOLA MUNDO ESTE ES CONTROLADOR GET POKEMONS');
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send(error.message);
    }
}

module.exports = {getPokemons};