import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../domain/Product';
import productsApi from '../../interface_adapters/api/productsApi';

const initialState: Product[] = productsApi;

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetProduct: () => {
            return initialState;
        },
        setFavoriteProduct: (state, action: PayloadAction<number>) => {
            const product = state.find(product => product.id === action.payload);
            if (product) {
                product.isFavorite = !product.isFavorite;
            }
        },
    },
});

export const { resetProduct, setFavoriteProduct } = productsSlice.actions;
export default productsSlice.reducer;
