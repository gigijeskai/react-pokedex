import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchData } from "../../reducers/apiReducer";
import StyleCard from "./stile";

interface TypeData {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

const Card: FunctionComponent = () => {
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
    <StyleCard>
      {data.map((pokemon) => (
        <div key={pokemon.id}>
          <h4>{pokemon.name}</h4>
          {pokemon.additionalData && (
            <div>
              <img
                src={pokemon.additionalData.sprites.front_default}
                alt={pokemon.name}
              />
              <p>N° {pokemon.additionalData.id}</p>
              <div>
                {pokemon.additionalData.types.map((type: TypeData) => (
                  <div key={type.slot}>{type.type.name}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </StyleCard>
  );
};

export default Card;
