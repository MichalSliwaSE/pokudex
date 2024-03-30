import { useState, useEffect } from "react";
import { PokemonCard } from "../../components";
import "./pokemons.css";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [pagination, setPagination] = useState({ limit: 9, offset: 0 });

  useEffect(() => {
    const apiEndpoint = `https://pokeapi.co/api/v2/pokemon?limit=${pagination.limit}&offset=${pagination.offset}`;

    const getPokemons = async () =>
      await fetch(apiEndpoint)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setPokemons(data.results);
        })
        .catch((error) => {
          console.error("There was a problem fetching the data:", error);
        });

    getPokemons();
  }, [pagination]);

  return (
    
    <div>
      <div>
        <ul id="pokemon-list">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemonName={pokemon.name} />
        ))}
        </ul>
      </div>


      <div className="pokemons-container-buttons">
        <button
          onClick={() =>
            setPagination({
              ...pagination,
              offset: pagination.offset - pagination.limit,
            })
          }
          className="pokemons-container-button"
          id="previous-btn"
          disabled={pagination.offset === 0}
        >
          Previous
        </button>
        <button
          onClick={() =>
            setPagination({
              ...pagination,
              offset: pagination.offset + pagination.limit,
            })
          }
          className="pokemons-container-button"
          id="next-btn"
          disabled={pagination.offset === 1296}
        >
          Next
        </button>
      </div>
    </div>
  );
}