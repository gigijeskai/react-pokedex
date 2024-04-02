import React, { FunctionComponent } from "react";
import { StylePokemonDetails } from "./style";
import {Pokemon, PokemonDetailsProps} from "../../interfaces/iPokemon";

const PokemonDetails: FunctionComponent<PokemonDetailsProps> = ({ pokemon, onClose }) => {
  return (
    <StylePokemonDetails>
      <button onClick={onClose}>Close</button>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.additionalData?.sprites.front_default} alt={pokemon.name} />
    </StylePokemonDetails>
  );
};

export default PokemonDetails;