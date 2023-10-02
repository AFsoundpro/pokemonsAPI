// actions.js
export const cargarPokemones = (pokemones) => ({
  type: 'CARGAR_POKEMONES',
  payload: pokemones,
});

export const agregarPokemon = (pokemones) => ({
  type: 'AGREGAR_POKEMON',
  payload: pokemones,
});

