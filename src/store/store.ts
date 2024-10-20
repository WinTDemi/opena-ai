import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import productsReducer from '../presentation/slices/ProductsSlice'; // Ensure this path is correct
import { combineReducers } from 'redux';

const ProductsPersistConfig = {
    key: 'products',
    storage,
};

const persistedProductsReducer = persistReducer(ProductsPersistConfig, productsReducer);

// Combine your reducers without persisting the root reducer
const rootReducer = combineReducers({
    products: persistedProductsReducer,
});

// Configure the store with the root reducer (no persistence at the root level)
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

// Create a persistor only for the slices that are persisted
const persistor = persistStore(store);

export { store, persistor }; // Export both store and persistor
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
