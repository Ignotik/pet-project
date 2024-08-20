import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filter from "../slices/filterSlice";
import product from "../slices/productSlice";

export const store = configureStore({
  reducer: {
    filter,
    product,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
