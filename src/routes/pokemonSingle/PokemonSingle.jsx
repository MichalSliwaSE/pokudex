import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonInfo } from "../../components";
import "./pokemonSingle.css";

export default function PokemonSingle() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({
    name: "",
    weight: 0,
    height: 0,
    image: "",
    image_back: "",
    type: "",
    stats: [],
    abilities: [],
  });

  const apiEndpoint = "https://pokeapi.co/api/v2/pokemon/" + name;

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPokemon({
          name: data.name,
          weight: data.weight,
          height: data.height,
          image: data.sprites.front_default,
          image_back: data.sprites.back_default,
          type: data.types[0].type.name,
          stats: data.stats,
          abilities: data.abilities,
        });
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
  }, [apiEndpoint]);

  return (
    <div className="pokemon-list">
      <PokemonInfo pokemon={pokemon} />
      <div className="pokemon-list-image-container">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="pokemon-list-image"
        />
         <img
          src={pokemon.image_back}
          alt={pokemon.name}
          className="pokemon-list-image"
        />
        <div className="pokemon-shadow" />
      </div>
      <div className="pokemon-abilities">
        <h2>Abilities:</h2>
        <ul>
          {pokemon.abilities.map((ability, index) => (
            <li className="abilities-name" key={index}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
