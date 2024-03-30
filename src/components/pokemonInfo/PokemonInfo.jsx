import "./pokemonInfo.css";

export default function PokemonInfo({ pokemon }) {
  return (
    <div className={`pokemon-card ${pokemon.type}`}>
      <div className="pokemon-card-grid">
        <div className="pokemon-card-item">
        <h3 className="pokemon-name">{pokemon.name}</h3>
        </div>
        <div className="pokemon-card-item">
          <h3 className="pokemon-type">{pokemon.type}</h3>
        </div>
        <div className="pokemon-card-item">
          <p>Weight:</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="pokemon-card-item">
          <p>Height:</p>
          <p>{pokemon.height}</p>
        </div>
        {pokemon.stats.map((stat, index) => (
          <div key={index} className="pokemon-card-item">
            <p>{stat.stat.name}:</p>
            <p>{stat.base_stat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
