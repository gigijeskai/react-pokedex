import { configureStore } from '@reduxjs/toolkit';
import  apiReducer  from '../reducers/apiReducer'

export const store = configureStore({
    reducer: {
        data: apiReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;