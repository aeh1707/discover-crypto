import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoReducer';
import searchReducer from './searchReducer';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    search: searchReducer,
  },
});

export default store;
