import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/ProductsSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
