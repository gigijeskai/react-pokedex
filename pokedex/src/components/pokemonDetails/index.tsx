import React, { FunctionComponent } from "react";
import { StylePokemonDetails } from "./style";
import { PokemonDetailsProps} from "../../interfaces/iPokemon";
import {StyleNameUppercase} from "../card/stile";
import { StyleDetailsImage } from "../imageContainers/styles";


const PokemonDetails: FunctionComponent<PokemonDetailsProps> = ({ pokemon, onClose }) => {
  return (
    <StylePokemonDetails>
      <StyleNameUppercase><h2>{pokemon.name + " " + "N°" + pokemon.additionalData?.id}</h2></StyleNameUppercase>
      <StyleDetailsImage src={pokemon.additionalData?.sprites.front_default} alt={pokemon.name} />
      <button onClick={onClose}>Find another pokemon</button>
    </StylePokemonDetails>
  );
};

export default PokemonDetails;