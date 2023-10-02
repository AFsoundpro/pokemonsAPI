import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../nav/NavigationBar";

function Detail() {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        // Realizar una solicitud HTTP para obtener los detalles del Pokémon desde tu servidor
        const response = await axios.get(`http://localhost:3001/pokemons/${name}`); // Cambia la URL según tu ruta en el servidor
        const data = response.data;

        if (data) {
          setPokemonDetails(data);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchPokemonDetails();
  }, [name]);

  if (!pokemonDetails) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <NavigationBar />
      <h1>Detalle de {name}</h1>
      <div className="poke-card">
        <img src={pokemonDetails.sprites.front_default} alt={name} />
        <h3>{name}</h3>
        <p>ID: {pokemonDetails.id}</p>
        <p>Vida: {pokemonDetails.stats[0].base_stat}</p>
        <p>Ataque: {pokemonDetails.stats[1].base_stat}</p>
        <p>Defensa: {pokemonDetails.stats[2].base_stat}</p>
        {pokemonDetails.stats[5] && <p>Velocidad: {pokemonDetails.stats[5].base_stat}</p>}
        {pokemonDetails.height && <p>Altura: {pokemonDetails.height / 10} m</p>}
        {pokemonDetails.weight && <p>Peso: {pokemonDetails.weight / 10} kg</p>}
        <p>Tipo: {pokemonDetails.types.map((type) => type.type.name).join(", ")}</p>
      </div>
    </div>
  );
}

export default Detail;
