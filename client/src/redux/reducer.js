// reducer.js
const initialState = {
  pokemons: [], // Almacena los datos básicos de los Pokémon
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARGAR_POKEMONES":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "AGREGAR_POKEMON":
      // Agrega el nuevo Pokémon al estado global
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
