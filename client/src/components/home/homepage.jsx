// Home.js

import React, { useState } from "react";
import SearchBar from "../nav/SearchBar";
import PokeList from "../cardList/Pokelist";

function Home() {
  const [pokemons, setPokemons] = useState([]); // Estado para almacenar los Pokémon

  // Función para actualizar el estado de los Pokémon
  const updatePokemons = (newPokemonData) => {
    setPokemons(newPokemonData);
  };

  return (
    <div>
      <h1>Home</h1>
      {/* Pasa la función de actualización como prop a SearchBar */}
      <SearchBar updatePokemons={updatePokemons} />
      {/* Pasa el estado de los Pokémon como prop a PokeList */}
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default Home;
