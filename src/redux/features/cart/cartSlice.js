import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    // Add to cart functionality
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id,
      );

      if (existingProduct) {
        // Mutation allowed here because of Immer
        existingProduct.quantity += action.payload.quantity || 1;
      } else {
        // If quantity is provided in payload, use it; otherwise, default to 1
        const newQuantity = action.payload.quantity || 1;
        state.products.push({ ...action.payload, quantity: newQuantity });
      }
    },

    // Remove product from cart functionality
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload,
      );
    },

    // Update product in cart
    updateQuantity: (state, action) => {
      const product = state.products.find((p) => p._id === action.payload._id);
      if (product) {
        if (action.payload.type === "increment") {
          product.quantity += 1;
        } else if (
          action.payload.type === "decrement" &&
          product.quantity > 1
        ) {
          product.quantity -= 1;
        }
      }
    },
  },
});

// --- SELECTORS ---
// Purpose: Read and calculate data DIRECTLY from the Global Store.
// Note: 'state' here refers to the FULL Store, not just this slice.

// Just get the product array from the store
export const selectCartProducts = (state) => state.cart.products;

export const selectTotalQuantity = (state) =>
  state.cart.products.reduce((total, product) => total + product.quantity, 0);

export const selectTotalPrice = (state) =>
  state.cart.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

// Exports of Slice
export const { addToCart, removeProduct, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
