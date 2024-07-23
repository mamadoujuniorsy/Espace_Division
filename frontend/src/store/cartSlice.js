import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.items.find(item => item.id === newProduct.id);

      if (existingProduct) {
        existingProduct.quantite += 1;
        existingProduct.totalPrice += newProduct.prix;
      } else {
        state.items.push({
          ...newProduct,
          quantite: 1,
          totalPrice: newProduct.prix,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += newProduct.prix;
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find(item => item.id === productId);

      if (existingProduct) {
        state.totalQuantity -= existingProduct.quantite;
        state.totalAmount -= existingProduct.totalPrice;
        state.items = state.items.filter(item => item.id !== productId);
      }
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find(item => item.id === productId);

      if (existingProduct) {
        existingProduct.quantite += 1;
        existingProduct.totalPrice += existingProduct.prix;
        state.totalQuantity += 1;
        state.totalAmount += existingProduct.prix;
      }
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find(item => item.id === productId);

      if (existingProduct && existingProduct.quantite > 1) {
        existingProduct.quantite -= 1;
        existingProduct.totalPrice -= existingProduct.prix;
        state.totalQuantity -= 1;
        state.totalAmount -= existingProduct.prix;
      } else if (existingProduct) {
        state.items = state.items.filter(item => item.id !== productId);
        state.totalQuantity -= 1;
        state.totalAmount -= existingProduct.prix;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export const selectCart = state => state.cart.items;

export default cartSlice.reducer;
