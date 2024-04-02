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

  interface PokemonDetailsProps {
    pokemon: Pokemon;
  onClose: () => void;
  }

  interface CardProps {
    pokemon: Pokemon;
    onClick: () => void; // Corrected type
  }

  export type {Pokemon, PokemonDetailsProps, TypeData, CardProps};