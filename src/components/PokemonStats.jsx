import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonStats() {
  const params = useParams()
  const [pokemonData, setPokemonData] = useState([]);

  async function getData() {
    const url = "https://pokeapi.co/api/v2/pokemon/1";
    const response = await fetch(url);
    const data = await response.json();

    setPokemonData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    pokemonData.sprites && (
      <div>
        <img
          src={pokemonData.sprites.front_default}
          alt="Pokemon Pic"
          width="200px"
        />
        <img
          src={pokemonData.sprites.back_default}
          alt="Pokemon Pic"
          width="200px"
        />
        <h1>{pokemonData.name.toUpperCase()}</h1>
        {/* <h1>Type: {}</h1> */}

        <h1>Weight: {pokemonData.weight}</h1>
        <h1>Height: {pokemonData.height}</h1>
      </div>
    )
  );
}

export default PokemonStats;
