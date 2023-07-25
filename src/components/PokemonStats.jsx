import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PokemonStats() {
const navigate = useNavigate()
  const [pokemonData, setPokemonData] = useState([]);
  const randomNum = Math.floor(Math.random() * 1000);

  async function getData() {
    const url = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
    const response = await fetch(url);
    const data = await response.json();

    setPokemonData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleBack(){
    navigate('/Trainers/Pokemon')
  }
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
        <button onClick={handleBack}>Go back!</button>
      </div>
    )
  );
}

export default PokemonStats;
