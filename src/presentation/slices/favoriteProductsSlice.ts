import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteProducts } from '../../domain/FavoriteProducts';

const initialState: FavoriteProducts[] = [];

const favoriteProductsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<FavoriteProducts>) => {
            state.push(action.payload);
        },
    },
});

export const { addFavorite } = favoriteProductsSlice.actions;
export default favoriteProductsSlice.reducer;
