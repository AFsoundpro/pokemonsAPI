const axios = require('axios');
const URL = "https://pokeapi.co/api/v2/pokemon";
require('dotenv').config();


const getPokemonsById = async (req, res) => {
    try {
        let {id} = req.params;
        console.log("Solicitando:",`${URL}/${id}`);
        const {data} = await axios.get(`${URL}/${id}`);
        console.log("Respuesta API:", data);
        res.json(data);
    } catch (error) {
        console.error("Error", error.message);
        res.status(500).send(error.message);
    }
}

module.exports = {getPokemonsById};