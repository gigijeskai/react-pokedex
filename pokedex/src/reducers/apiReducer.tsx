import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store/store';
import axios from 'axios';
import { PokemonData } from '../interfaces/iPokemon';


interface DataState {
    loading: boolean;
    error: string | null;
    data: PokemonData[];
    query?:  PokemonData[] | null;
}

const initialState: DataState = {
    loading: false,
    error: null,
    data: [],
    query: null,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        fetchStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchSuccess(state, action: PayloadAction<PokemonData[]>) {
            state.loading = false;
            state.data = action.payload;
            state.query = null;
        },
        fetchFail(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        fetchQuery(state, action: PayloadAction<PokemonData[]>) {
            state.loading = false;
            state.query = action.payload;
    },
    },
});

export const { fetchStart, fetchQuery, fetchSuccess, fetchFail } = dataSlice.actions;






// Fetch additional Pokémon data
export const fetchMoreData = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { data } = getState().data;
    const offset = data.length; 

    dispatch(fetchStart());
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
        const pokemonData = response.data.results;
        
        const additionalDataPromises = pokemonData.map((pokemon: PokemonData) => axios.get(pokemon.url));
        const additionalDataResponses = await Promise.all(additionalDataPromises);
        
        const updatedPokemonData = pokemonData.map((pokemon: PokemonData, index: number) => ({
            ...pokemon,
            additionalData: additionalDataResponses[index].data
        }));

        dispatch(fetchSuccess([...data, ...updatedPokemonData])); // Append new data to existing data
    } catch (error: any) {
        dispatch(fetchFail(error.message));
    }
};



// Fetch Pokémon by name


export const fetchPokemonByName = (pokemonName: string): any => async (dispatch: AppDispatch) => {
    
    dispatch(fetchStart());
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        const pokemonData = response.data;
        console.log(pokemonData);
        
        dispatch(fetchQuery([pokemonData])); 
    } catch (error: any) {
        dispatch(fetchFail(error.message));
    }
};
export default dataSlice.reducer;
