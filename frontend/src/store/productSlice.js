import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import summaryAPI from '../../common';

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (category) => {
    const response = await fetch(summaryAPI.get_products.url, {
      method: summaryAPI.get_products.method,
    });
    if (!response.ok) {
      throw new Error('Erreur reponse API');
    }
    const data = await response.json();
    return data.filter(product => product.category === category);
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectProductsByCategory = (state, category) => 
  state.products.products.filter(product => product.category === category);

export default productSlice.reducer;
