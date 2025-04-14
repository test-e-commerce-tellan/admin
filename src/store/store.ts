import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import couponsReducer from "./features/coupons/couponSlice";
import recipeReducer from "./features/recipe/recipeSlice";
import imageUploadReducer from "./features/uploads/uploadSlice";
import productReducer from "./features/products/productSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    coupons: couponsReducer,
    recipes: recipeReducer,
    uploads: imageUploadReducer,
    products: productReducer
  },
  devTools: process.env.NODE_ENV != "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
