import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { cargarPokemones } from '../../redux/actions';
import { Link } from 'react-router-dom';


const API_URL = "http://localhost:3001/pokemons";
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

function PokeList({ cargarPokemones, pokemons }) {
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        if (data && Array.isArray(data)) {
          cargarPokemones(data);
        } else {
          setError("No hay Pokemons para mostrar");
        }
      } catch (error) {
        setError("Error: " + error.message);
      }
    }
    fetchData();
  }, [cargarPokemones]);

  useEffect(() => {
    async function fetchPokemonDetails(pokemonName) {
      try {
        const response = await axios.get(`${POKEAPI_BASE_URL}/${pokemonName}`);
        const data = response.data;
        setPokemonDetails((prevState) => ({
          ...prevState,
          [pokemonName]: data,
        }));
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    }

    // Cuando se actualice la lista de pokemons, obtener los detalles de cada uno
    pokemons.forEach((poke) => {
      if (!pokemonDetails[poke.name]) {
        fetchPokemonDetails(poke.name);
      }
    });
  }, [pokemons, pokemonDetails]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="poke-list">
      <h2>Sección De Cartas</h2>
      {pokemons
        .slice(
          (currentPage - 1) * pokemonsPerPage,
          currentPage * pokemonsPerPage
        )
        .map((poke) => (
          <div key={poke.id}>
            {pokemonDetails[poke.name] && (
              <div>
                <img
                  src={pokemonDetails[poke.name].sprites.front_default}
                  alt={poke.name}
                  />
                  <h3>{poke.name}</h3>
                <p>ID: {pokemonDetails[poke.name].id}</p>
                <p>Tipo: {pokemonDetails[poke.name].types[0].type.name}</p>
                {/* Puedes mostrar otros detalles del Pokémon aquí */}
                <Link to={`/detail/${poke.name}`}>Ver Detalle</Link>
              </div>
            )}
          </div>
        ))}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(pokemons.length / pokemonsPerPage)
          }
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

export default connect(mapStateToProps, { cargarPokemones })(PokeList);
