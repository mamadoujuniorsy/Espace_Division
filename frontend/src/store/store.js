import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import orderReducer from './orderSlice';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    orders: orderReducer,
    cart: cartReducer,
    products: productReducer,
  },
});
