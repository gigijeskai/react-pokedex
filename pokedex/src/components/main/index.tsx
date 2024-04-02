import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchData } from "../../reducers/apiReducer";
import StyleMain from "./style";
import Card from "../card";
import { Pokemon } from "../../interfaces/iPokemon";
import PokemonDetails from "../pokemonDetails";

const Main: FunctionComponent = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.data
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
    
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
    
  return (
    <StyleMain>
      {selectedPokemon ? (
        <PokemonDetails 
          pokemon={selectedPokemon} 
          onClose={() => setSelectedPokemon(null)} 
        /> 
      ) : (
        data.map((pokemon) => (
          <Card 
            key={pokemon.id} 
            pokemon={pokemon} 
            onClick={() => setSelectedPokemon(pokemon)} // Set selectedPokemon when clicked
          />
        ))
      )}
    </StyleMain>
  );
};
  
export default Main;