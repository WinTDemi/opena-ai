import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import favoriteProductsReducer from '../presentation/slices/favoriteProductsSlice'; // Ensure this path is correct
import { combineReducers } from 'redux';

const favoriteProductsPersistConfig = {
    key: 'favoriteProducts',
    storage,
};

const persistedFavoriteProductsReducer = persistReducer(favoriteProductsPersistConfig, favoriteProductsReducer);

// Combine your reducers without persisting the root reducer
const rootReducer = combineReducers({
    favoriteProducts: persistedFavoriteProductsReducer,
});

// Configure the store with the root reducer (no persistence at the root level)
const store = configureStore({
    reducer: rootReducer,
});

// Create a persistor only for the slices that are persisted
const persistor = persistStore(store);

export { store, persistor }; // Export both store and persistor
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
