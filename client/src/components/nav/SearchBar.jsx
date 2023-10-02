// SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { agregarPokemon } from '../../redux/actions';

function SearchBar({ agregarPokemon }) {
  const [pokemonName, setPokemonName] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/pokemons/${pokemonName}`);
      const nuevoPokemon = response.data.species;

      // Filtra los datos para obtener el nombre y la URL del Pokémon
      const { name, url } = nuevoPokemon;

      // Agrega el nuevo Pokémon al estado global de Redux con nombre y URL
      agregarPokemon({ name, url });

      // Limpia el campo de búsqueda después de agregar el Pokémon
      setPokemonName('');

      // Limpia cualquier error previo
      setError(null);
    } catch (error) {
      console.error('Error al buscar el Pokémon:', error);
      setError('No se encontró ningún Pokémon con ese nombre o ID.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre o ID del Pokémon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {error && <div>{error}</div>}
    </div>
  );
}

export default connect(null, { agregarPokemon })(SearchBar);
