import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchMoreData, fetchPokemonByName  } from "../../reducers/apiReducer";
import {StyleMain, StyleLoadPokemonButton} from "./style";
import Card from "../card";
import CardSearchResult from "../cardSearchResult";
import { Pokemon, Pokemon2 } from "../../interfaces/iPokemon";
import PokemonDetails from "../pokemonDetails";
import { StyleCenterDiv } from "../pokemonsStatistics/style";

const Main: FunctionComponent = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null | Pokemon2>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data , query} = useSelector(
    (state: RootState) => state.data
  );

  useEffect(() => {
    dispatch(fetchMoreData ());
  }, [dispatch]);

  const handleLoadMoreClick = () => {
    dispatch(fetchMoreData());
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
    <StyleMain>
      {selectedPokemon ? (
        <PokemonDetails
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      ) : (
        <>
        {query? (
  query.map((pokemon) => (
    console.log(pokemon),
    
    <CardSearchResult
      key={pokemon.id}
      pokemon={pokemon}
      onClick={() => setSelectedPokemon(pokemon)}
    />
  ))
) : (
  data.map((pokemon) => (
    <Card
      key={pokemon.id}
      pokemon={pokemon}
      onClick={() => setSelectedPokemon(pokemon)}
    />
  ))
)}
      </>
    )}
  </StyleMain>
  {selectedPokemon ? ( null ) :(
  <StyleCenterDiv>
    <StyleLoadPokemonButton onClick={handleLoadMoreClick}>Load More</StyleLoadPokemonButton>
    </StyleCenterDiv>
  ) }
    </>
);
};

export default Main;
