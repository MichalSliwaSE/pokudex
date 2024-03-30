import "./about.css";

export default function About() {
  return (
    <div className="about-page">
      <h1>About Pokedex</h1>
      <div className="about-content">
        <h2>What is Pokedex?</h2>
        <p>
          Pokedex is a web application developed as a university project to
          serve as an interactive encyclopedia of Pokémon.
        </p>
        <p>
          {" "}
          It allows users to explore and learn about various Pokémon species,
          their characteristics, abilities, and other relevant information.
        </p>

        <h2>Requirements</h2>
        <p>Pokedex fulfills the following requirements:</p>
        <ul>
          <li>
            Retrieval of Pokémon information from PokéAPI, ensuring up-to-date
            data.
          </li>
          <li>
            Display of a paginated list of Pokémon, with support for simple
            pagination using "next" and "previous" buttons.
          </li>
          <li>
            Display of additional information about a specific Pokémon upon
            clicking on it.
          </li>
          <li>
            Utilization of React Router to implement multiple pages, such as
            "pokedex" and "about". Development using the Create React App
            toolchain for efficient and standardized React app development.
          </li>
        </ul>
      </div>
    </div>
  );
}
