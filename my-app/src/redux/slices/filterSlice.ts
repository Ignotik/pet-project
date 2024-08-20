import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  sortType: {
    type: string;
  };
  sortList: {
    list: string;
  };
}

const initialState: FilterState = {
  sortList: {
    list: "-price",
  },
  sortType: {
    type: "coal",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterType(state, action: PayloadAction<{ type: string }>) {
      state.sortType = action.payload;
    },
  },
});

export const { setFilterType } = filterSlice.actions;
export default filterSlice.reducer;
