import React, {FunctionComponent} from "react";
import {StylePokemonsStatistics, StyleType, BlueDiv, WhiteText, StyleCenterDiv, StyleAbility} from "./style";
import { PokemonStatsProps } from "../../interfaces/iPokemon";
import  Graph  from "../graph";
import { StyleNameUppercase } from "../card/stile";

const PokemonsStatistics: FunctionComponent<PokemonStatsProps> = ({pokemon}) => {
  return (
    <StylePokemonsStatistics>
        <h3>Stats</h3>
        <Graph pokemon={pokemon} />
            
        {/* <h3>Game version</h3>
        <ul>
            {pokemon.additionalData?.game_indices.map((game) => (
            <li key={game.version.name}>{game.version.name}</li>
            ))}
        </ul> */}
        <StyleCenterDiv>
        <BlueDiv>
<WhiteText>Height</WhiteText>
<p>{pokemon.additionalData?.height}</p>
<WhiteText>Weigth</WhiteText>
<p>{pokemon.additionalData?.weight}</p>
<WhiteText>Ability</WhiteText>
<StyleAbility>
{pokemon.additionalData?.abilities.map((ability) => 
<p>{ability.ability.name}</p>)}
</StyleAbility>
        </BlueDiv>
        </StyleCenterDiv>
        <h3>Type</h3>
        <StyleType>{pokemon.additionalData?.types.map((type) => (
           <StyleNameUppercase> <p key={type.type.name}>{type.type.name}</p></StyleNameUppercase>
        ))}</StyleType>
    </StylePokemonsStatistics>
  )
};

export default PokemonsStatistics;