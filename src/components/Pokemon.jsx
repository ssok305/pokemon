import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    pokemonImg();
  }, []);

  function randomPokemons() {
    let numArr = [];
    for (let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * 1000);
      numArr.push(num);
    }
    return numArr;
  }
  let pokemonNums = randomPokemons();

  async function pokemonImg() {
    let arr = [];
    for (let pokemon of pokemonNums) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      const data = await response.json();

      let pokemonImg = {
        img: data.sprites.front_default,
        name: data.forms[0].name,
      };

      arr.push(pokemonImg);
    }

    setPokemons([...pokemons, arr]);
  }

  function handlePokemonClick() {
    navigate("./PokemonData");
  }
  function handleBack() {
    navigate("/Trainers");
  }
  return (
    <div>
      <button onClick={handleBack}>Go Back</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          marginBottom: "100px",
        }}
      >
        {pokemons.length > 0 &&
          pokemons[0].map((pokemon, index) => {
            return (
              <div onClick={handlePokemonClick} key={pokemon.img}>
                <img
                  key={index}
                  src={pokemon.img}
                  alt="a picture of a pokemon"
                  width={150}
                />

                <span>{pokemon.name}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pokemon;
