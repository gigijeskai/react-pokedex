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
      abilities: [
        {
          ability: {
            name: string;
          };
        }
      ];
      game_indices: [
        {
          version: {
            name: string;
          };
        }
      ];
      moves: [
        {
          move: {
            name: string;
          };
        }
      ];
      species: {
        name: string;
      };
      weight: number;
height: number;
      stats: [
        {
          base_stat: number;
          stat: {
            name: string;
          };
        }
      ];
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
    onClick: () => void; 
  }

  interface PokemonStatsProps {
    pokemon: Pokemon;
  }

  interface GraphProps {
    pokemon: Pokemon;
  }

  interface PokemonData {
    name: string;
    id: number;
    url: string;
    additionalData?: any; // Aggiungi campo per i dati aggiuntivi
}

  export type {Pokemon, PokemonData, GraphProps, PokemonDetailsProps, TypeData, CardProps, PokemonStatsProps};