const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/type';

const getTypes = async (req, res) => {
    try {
        const { data } = await axios.get(`${URL}`);
        console.log("Respuesta de la API:", data);
        res.json(data);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send(error.message);
    }
}

module.exports = { getTypes };
