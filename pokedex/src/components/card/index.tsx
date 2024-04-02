import React, { FunctionComponent } from "react";
import {StyleCard, StyleNameUppercase, StyleCardCategory, StyleCardImageContainer, StyleSingleCategory} from "./stile";
import {StylecardImage} from "../imageContainers/styles";
import { CardProps} from "../../interfaces/iPokemon";


const Card: FunctionComponent<CardProps> = ({ pokemon, onClick }) => {
  
  return (
    <StyleCard>
    <div key={pokemon.id} onClick={onClick}> {/* Call onClick when the card is clicked */}
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

          <StyleCardCategory>
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
