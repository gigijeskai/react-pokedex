import React, {FunctionComponent} from "react";
import {StylePokemonsStatistics, BlueDiv, WhiteText} from "./style";
import { PokemonStatsProps } from "../../interfaces/iPokemon";

const PokemonsStatistics: FunctionComponent<PokemonStatsProps> = ({pokemon}) => {
  return (
    <StylePokemonsStatistics>
        <h3>Stats</h3>
        <ul>
            {pokemon.additionalData?.stats.map((stat) => (
            <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
            </li>
            ))}
        </ul>
        <h3>Game version</h3>
        <ul>
            {pokemon.additionalData?.game_indices.map((game) => (
            <li key={game.version.name}>{game.version.name}</li>
            ))}
        </ul>
        <BlueDiv>
<WhiteText>Height</WhiteText>
<p>{pokemon.additionalData?.height}</p>
<WhiteText>Weigth</WhiteText>
<p>{pokemon.additionalData?.weight}</p>
<WhiteText>Ability</WhiteText>
<p>{pokemon.additionalData?.abilities.map((ability) => 
<p>{ability.ability.name}</p>)}</p>
        </BlueDiv>
        <h3>Type</h3>
        {pokemon.additionalData?.types.map((type) => (
            <p key={type.type.name}>{type.type.name}</p>
        ))}
    </StylePokemonsStatistics>
  )
};

export default PokemonsStatistics;