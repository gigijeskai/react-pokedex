import React, { FunctionComponent, useEffect, useState } from "react";
import {StyleCard, StyleNameUppercase, StyleCardCategory, StyleCardImageContainer, StyleSingleCategory} from "./stile";
import {StylecardImage} from "../imageContainers/styles";
import { CardProps, Pokemon} from "../../interfaces/iPokemon";

interface Type {
  type: {
    name: string;
  };
}

interface TypeColors {
  [key: string]: string;
}

const Card: FunctionComponent<CardProps> = ({ pokemon, onClick }) => {
  
  useEffect(() => {
    setPokemonData(pokemon);
  }, [pokemon]);

  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);



  const getCategoryColor = (types: Type[]) => {
    const typeColors: TypeColors = {
      grass: "LawnGreen",
      fire: "red",
      water: "blue",
      bug: "GreenYellow",
      poison: "indigo",
      fairy: "Fuchsia",
      psychic: "DarkViolet",
      electric: "DarkOrange",
      ground: "Sienna",
      rock: "DarkGrey",
      ghost: "DarkOrchid",
      ice: "DarkCyan",
      dragon: "DarkRed",
      dark: "DarkSlateGrey",
      steel: "DarkGrey",
      flying: "SkyBlue",
      fighting: "Maroon",
      normal: "gray",
      default: "gray",
    };
  
    const firstTypeColor = typeColors[types[0]?.type.name] || typeColors.default;
  
    return firstTypeColor;
  };

  // Utilizza console.log() per visualizzare i dati nella console del browser
  useEffect(() => {
    console.log("card " + pokemon.additionalData?.types);
  }, [pokemon]);

  return (
    <StyleCard>
      <div key={pokemon.id} onClick={onClick}> 
          <div>
            <StyleCardImageContainer>
              <StylecardImage
                src={pokemon.additionalData?.sprites.front_default}
                alt={pokemon.name}
              />
            </StyleCardImageContainer>
            <p>N° {pokemon.id}</p>
<h4><StyleNameUppercase>{pokemon.name}</StyleNameUppercase></h4>
<StyleCardCategory categoryColor={pokemon.additionalData?.types ? getCategoryColor(pokemon.additionalData.types) : 'defaultColor'}>
  {pokemon.additionalData?.types.map((type) => (
    <StyleSingleCategory key={type.slot}>
      <StyleNameUppercase>{type.type.name}</StyleNameUppercase>
    </StyleSingleCategory>
  ))}
</StyleCardCategory>
          </div>
        
      </div>
    </StyleCard>
  );
};

export default Card;