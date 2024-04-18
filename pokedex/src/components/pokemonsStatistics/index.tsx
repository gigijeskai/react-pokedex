import React, { FunctionComponent, useEffect, useState } from "react";
import {StylePokemonsStatistics, StyleType, BlueDiv, WhiteText, StyleCenterDiv, StyleAbility} from "./style";
import { PokemonStatsProps, Pokemon, Pokemon2 } from "../../interfaces/iPokemon";
import  Graph  from "../graph";
import { StyleNameUppercase } from "../card/stile";

const PokemonsStatistics: FunctionComponent<PokemonStatsProps> = ({pokemon}) => {
  return (

    <StylePokemonsStatistics>
    <h3>Stats</h3>
    <Graph pokemon={pokemon} />
    <StyleCenterDiv>
      <BlueDiv>
        <WhiteText>Height</WhiteText>
        <p>{(pokemon as Pokemon).additionalData?.height || (pokemon as Pokemon2).height}</p>
        <WhiteText>Weight</WhiteText>
        <p>{(pokemon as Pokemon).additionalData?.weight || (pokemon as Pokemon2).weight}</p>
        <WhiteText>Abilities</WhiteText>
        <StyleAbility>
          {(pokemon as Pokemon).additionalData?.abilities.map((ability) => (
            <p key={ability.ability.name}>{ability.ability.name}</p>
          )) || (pokemon as Pokemon2).abilities.map((ability) => (
            <p key={ability.ability.name}>{ability.ability.name}</p>
          ))}
        </StyleAbility>
      </BlueDiv>
    </StyleCenterDiv>
    <h3>Type</h3>
    <StyleType>
      {(pokemon as Pokemon).additionalData?.types.map((type) => (
        <StyleNameUppercase key={type.type.name}>
          <p>{type.type.name}</p>
        </StyleNameUppercase>
      )) || (pokemon as Pokemon2).types.map((type) => (
        <StyleNameUppercase key={type.type.name}>
          <p>{type.type.name}</p>
        </StyleNameUppercase>
      ))}
    </StyleType>
  </StylePokemonsStatistics>
  )
};

export default PokemonsStatistics;