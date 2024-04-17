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
  
  interface Pokemon2 {
    id: number;
    name: string;
    
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
      types: TypeData[];
    };
  
  interface PokemonDetailsProps {
    pokemon: Pokemon;
  onClose: () => void;
  }

  interface CardProps {
    pokemon: Pokemon;
    onClick: () => void; 
  }
  interface CardProps2 {
    pokemon: Pokemon2;
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
    additionalData?: any; 
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
    types: TypeData[];
}

  export type {Pokemon, Pokemon2, CardProps2, PokemonData, GraphProps, PokemonDetailsProps, TypeData, CardProps, PokemonStatsProps};