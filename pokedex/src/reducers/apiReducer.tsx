import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store/store';
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

export const fetchData = () => async (dispatch: AppDispatch) => {
    dispatch(fetchStart());
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
        const pokemonData = response.data.results;
        
        const additionalDataPromises = pokemonData.map((pokemon: PokemonData) => axios.get(pokemon.url));
        const additionalDataResponses = await Promise.all(additionalDataPromises);
        
        const updatedPokemonData = pokemonData.map((pokemon: PokemonData, index: number) => ({
            ...pokemon,
            additionalData: additionalDataResponses[index].data
        }));

        dispatch(fetchSuccess(updatedPokemonData));
    } catch (error: any) {
        dispatch(fetchFail(error.message));
    }
};

export default dataSlice.reducer;
