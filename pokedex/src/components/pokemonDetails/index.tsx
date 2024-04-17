import React, { FunctionComponent } from "react";
import { StylePokemonDetails } from "./style";
import { PokemonDetailsProps, Pokemon, Pokemon2} from "../../interfaces/iPokemon";
import {StyleNameUppercase} from "../card/stile";
import { StyleDetailsImage } from "../imageContainers/styles";
import PokemonsStatistics from "../pokemonsStatistics";
import { StyleLoadPokemonButton} from "../main/style"

const PokemonDetails: FunctionComponent<PokemonDetailsProps> = ({ pokemon, onClose }) => {
  return (
    <StylePokemonDetails>
      <StyleNameUppercase><h2>{pokemon.name} </h2></StyleNameUppercase>
      <StyleDetailsImage src={(pokemon as Pokemon).additionalData?.sprites.front_default || (pokemon as Pokemon2).sprites.front_default} alt={pokemon.name} />
      <PokemonsStatistics pokemon={pokemon} />
      <StyleLoadPokemonButton onClick={onClose}>Find another pokemon</StyleLoadPokemonButton>
    </StylePokemonDetails>
  );
};

export default PokemonDetails;