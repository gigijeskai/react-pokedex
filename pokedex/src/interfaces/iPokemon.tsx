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

  export default Pokemon;