import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectSearchTerm } from './searchReducer';

export const fetchCoins = createAsyncThunk('crypto/getCrypto', async () => {
  const response = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
  );
  const dat = response.data;
  return dat;
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchCoins.fulfilled]: (state, action) => action.payload,
  },
});

export const selectCoinData = (state) => state.crypto;

export const selectFilteredCoins = (state) => {
  const allStocks = selectCoinData(state);
  const searchTerm = selectSearchTerm(state);
  return allStocks.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
};

export default cryptoSlice.reducer;
