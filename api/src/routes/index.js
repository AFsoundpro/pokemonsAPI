const {Router} = require('express');
const router = Router();
const { getPokemons } = require('../controllers/getPokemons');
const {getPokemonsById} = require('../controllers/getPokemonsByid');
const {getTypes} = require('../controllers/getTypes');


router.get('/pokemons', getPokemons);
router.get('/pokemons/:id', getPokemonsById);
// router.get('/pokemons/:name');
router.post('/pokemons', );
router.get('/types', getTypes);

module.exports = router;