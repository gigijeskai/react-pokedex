import { FunctionComponent } from "react";
import {StyleCard, StyleNameUppercase, StylecardImage, StyleCardCategory, StyleCardImageContainer, StyleSingleCategory} from "./stile";

interface TypeData {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  additionalData?: {
    sprites: {
      front_default: string;
    };
    id: number;
    types: TypeData[];
  };
}

const Card: FunctionComponent<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <StyleCard>
      <div key={pokemon.id}>
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
