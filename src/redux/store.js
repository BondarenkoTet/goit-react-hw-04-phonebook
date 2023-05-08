import { configureStore } from "@reduxjs/toolkit";
//import {inputSlice} from "../redux/inputSlice" ;
import {contactsReducer as rootReducer} from "../redux/inputSlice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
    }
const inputReducer = persistReducer(
    persistConfig,
    rootReducer
)

export const store = configureStore({
    reducer: inputReducer,
    middleware (getDefaultMiddleware) { 
        return getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    });
    },
});

export const persistor = persistStore(store)
