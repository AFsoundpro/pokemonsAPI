const {Router} = require('express');
const router = Router();
const {getPokemons} = require('../controllers/getPokemons');


router.get('/pokemons', getPokemons);
router.get('/pokemons/:id');
router.get('/pokemons/name');
// router.post('/pokemons');
router.get('/types');

module.exports = router;