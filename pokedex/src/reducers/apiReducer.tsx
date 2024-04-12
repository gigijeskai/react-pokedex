import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store/store';
import axios from 'axios';

interface PokemonData {
    name: string;
    id: number;
    url: string;
    additionalData?: any; // Aggiungi campo per i dati aggiuntivi
}

interface DataState {
    loading: boolean;
    error: string | null;
    data: PokemonData[];
}

const initialState: DataState = {
    loading: false,
    error: null,
    data: [],
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
        },
        fetchFail(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchStart, fetchSuccess, fetchFail } = dataSlice.actions;






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
        
        dispatch(fetchSuccess([pokemonData])); 
    } catch (error: any) {
        dispatch(fetchFail(error.message));
    }
};
export default dataSlice.reducer;
