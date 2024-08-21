import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  sortType: string;
  sortList: string;
  priceTo: number;
  priceFrom: number;
}

const initialState: FilterState = {
  sortList: "-price",
  sortType: "coal",
  priceTo: 10000,
  priceFrom: 0,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterType(state, action: PayloadAction<string>) {
      state.sortType = action.payload;
    },
    setSortList(state, action: PayloadAction<string>) {
      state.sortList = action.payload;
    },
    setPriceFrom(state, action: PayloadAction<number>) {
      state.priceFrom = action.payload;
    },
    setPriceTo(state, action: PayloadAction<number>) {
      state.priceTo = action.payload;
    },
  },
});

export const { setFilterType, setSortList, setPriceFrom, setPriceTo } =
  filterSlice.actions;
export default filterSlice.reducer;
