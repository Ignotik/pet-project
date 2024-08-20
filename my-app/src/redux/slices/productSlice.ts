import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://434a8c7f07f41819.mokky.dev/products";

interface Product {
  id: number;
  title: string;
  price: number;
  type: string;
  img: string;
}

interface ProductState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
  totalPages: number;
}

const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
  totalPages: 1,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async (args: { sortType: string; page?: number; limit?: number }) => {
    const { sortType, page = 1, limit = 8 } = args;
    const response = await axios.get(
      `${apiUrl}?page=${page}&limit=${limit}&type=${sortType}`
    );
    return {
      items: response.data.items,
      totalPages: response.data.meta.total_pages,
    };
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.items;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
