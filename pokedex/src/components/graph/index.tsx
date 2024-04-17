import React, { FunctionComponent } from "react";
import { GraphProps, Pokemon, Pokemon2 } from "../../interfaces/iPokemon";
import { StyleGraph, StyleBox } from "./style";

const Graph: FunctionComponent<GraphProps> = ({ pokemon }) => {
  const percentages = {
    hp:
      (pokemon as Pokemon).additionalData?.stats.find(
        (stat) => stat.stat.name === "hp"
      )?.base_stat ||
      0 ||
      ((pokemon as Pokemon2).stats.find((stat) => stat.stat.name === "hp")
        ?.base_stat || 0) / 100,
    attack:
      (pokemon as Pokemon).additionalData?.stats.find(
        (stat) => stat.stat.name === "attack"
      )?.base_stat ||
      0 ||
      ((pokemon as Pokemon2).stats.find((stat) => stat.stat.name === "attack")
        ?.base_stat || 0) / 100,

    defense:
      (pokemon as Pokemon).additionalData?.stats.find(
        (stat) => stat.stat.name === "defense"
      )?.base_stat ||
      0 ||
      ((pokemon as Pokemon2).stats.find((stat) => stat.stat.name === "defense")
        ?.base_stat || 0) / 100,

    specialAttack:
      (pokemon as Pokemon).additionalData?.stats.find(
        (stat) => stat.stat.name === "special-attack"
      )?.base_stat ||
      0 ||
      ((pokemon as Pokemon2).stats.find(
        (stat) => stat.stat.name === "special-attack"
      )?.base_stat || 0) / 100,

    specialDefense:
      (pokemon as Pokemon).additionalData?.stats.find(
        (stat) => stat.stat.name === "special-defense"
      )?.base_stat ||
      0 ||
      ((pokemon as Pokemon2).stats.find(
        (stat) => stat.stat.name === "special-attack"
      )?.base_stat || 0) / 100,

    speed:
      (pokemon as Pokemon).additionalData?.stats.find(
        (stat) => stat.stat.name === "speed"
      )?.base_stat ||
      0 ||
      ((pokemon as Pokemon2).stats.find(
        (stat) => stat.stat.name === "special-attack"
      )?.base_stat || 0) / 100,
  };

  return (
    <StyleGraph>
      <span>HP </span>
      <StyleBox style={{ width: `${percentages.hp * 500}px` }}></StyleBox>
      <br />
      <span>ATT </span>
      <StyleBox style={{ width: `${percentages.attack * 500}px` }}></StyleBox>
      <br />
      <span>DEF </span>
      <StyleBox style={{ width: `${percentages.defense * 500}px` }}></StyleBox>
      <br />
      <span>S.ATT </span>
      <StyleBox
        style={{ width: `${percentages.specialAttack * 500}px` }}
      ></StyleBox>
      <br />
      <span>S.DEF </span>
      <StyleBox
        style={{ width: `${percentages.specialDefense * 500}px` }}
      ></StyleBox>
      <br />
      <span>SPEED </span>
      <StyleBox style={{ width: `${percentages.speed * 500}px` }}></StyleBox>
    </StyleGraph>
  );
};

export default Graph;
