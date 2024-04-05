import React, { FunctionComponent } from "react";
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
  
  const getCategoryColor = (types: Type[]) => {
    const typeColors: TypeColors = {
      grass: "LawnGreen",
      fire: "red",
      water: "blue",
      bug: "GreenYellow",
      poison: "indigo",
      default: "gray",
    };
  
    const firstTypeColor = typeColors[types[0]?.type.name] || typeColors.default;
  
    return firstTypeColor;
  };

  return (
    <StyleCard>
    <div key={pokemon.id} onClick={onClick}> 
      {pokemon.additionalData && (
        <div>
          <StyleCardImageContainer>
          <StylecardImage
            src={pokemon.additionalData.sprites.front_default}
            alt={pokemon.name}
          />
          </StyleCardImageContainer>
          <p>N° {pokemon.additionalData.id}</p>

          <h4><StyleNameUppercase>{pokemon.name}</StyleNameUppercase></h4>

          <StyleCardCategory categoryColor={getCategoryColor(pokemon.additionalData.types)}>
              {pokemon.additionalData.types.map((type) => (
                <StyleSingleCategory key={type.slot}><StyleNameUppercase>{type.type.name}</StyleNameUppercase></StyleSingleCategory>
              ))}
          </StyleCardCategory>
        </div>
      )}
    </div>
  </StyleCard>
  );
};

export default Card;
