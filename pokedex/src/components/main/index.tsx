import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchData } from "../../reducers/apiReducer";
import  StyleMain  from "./style";
import Card from "../card";

const Main: FunctionComponent = () => {
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
        {data.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </StyleMain>
    );
  };
  
  export default Main;