import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cart: [],
  isInCart: false,
  postPrice: 40,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;

      // چک میکنه ک محصول
      // سبد خرید وجود داره یا نه
      const exsitingItem = state.cart.find((item) => item.id === product.id);
      if (exsitingItem) {
        exsitingItem.quantity++;
        toast.success(`${exsitingItem.title} : ${exsitingItem.quantity}`);
      } else {
        toast.success("The product has been added to the shopping cart ");
        state.cart.push(product);
      }
    },

    removeProduct: (state, action) => {
      // action => id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      toast.success("The product was successfully removed");
    },

    increaseProductQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },

    decreaseProductQuantity: (state, action) => {
      const item = state?.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;

      //   اگر تعداد ایتم کمتر 0 بود اتیم
      //   دیلیت میشه
      if (item.quantity === 0)
        cartSlice.caseReducers.removeProduct(state, action);
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const getCart = (state) => state.cart.cart;

export const getTotalCartPrice = (state) =>
  state?.cart?.cart?.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state?.cart?.cart?.find((item) => item.id === id)?.quantity ?? 0;

// Action creators are generated for each case reducer function
export const {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
