import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import couponsReducer from "./features/coupons/couponSlice";
import recipeReducer from "./features/recipe/recipeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    coupons: couponsReducer,
    recipes: recipeReducer,
  },
  devTools: process.env.NODE_ENV != "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
