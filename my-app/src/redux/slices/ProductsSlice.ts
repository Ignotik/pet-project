import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const limitPerPage = 8;
const apiUrl = "https://66a6727f23b29e17a1a2b070.mockapi.io/products";

export const fetchTotalCount = createAsyncThunk(
  "products/fetchTotalCount",
  async () => {
    const response = await axios.get(apiUrl);
    return response.data.length;
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (pageNo: number = 1) => {
    const response = await axios.get(
      `${apiUrl}?page=${pageNo}&limit=${limitPerPage}`
    );
    return {
      items: response.data,
    };
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    totalCount: 0,
    status: "idle",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTotalCount.fulfilled, (state, action) => {
        state.totalCount = action.payload;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default productsSlice.reducer;
