import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: number;
  title: string;
  price: number;
  type: string;
  img: string;
  count: number;
};

interface CartState {
  items: Product[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const findItem = state.items.find((obj) => obj.id === item.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...item, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearItem(state, action: PayloadAction<number>) {
      const itemIdToRemove = action.payload;
      const itemIndex = state.items.findIndex(
        (obj) => obj.id === itemIdToRemove
      );
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action: PayloadAction<number>) {
      const itemIdToDecrease = action.payload;
      const findItem = state.items.find((obj) => obj.id === itemIdToDecrease);
      if (findItem) {
        if (findItem.count > 0) {
          findItem.count--;
        }
        if (findItem.count === 0) {
          const itemIndex = state.items.findIndex(
            (obj) => obj.id === itemIdToDecrease
          );
          if (itemIndex !== -1) {
            state.items.splice(itemIndex, 1);
          }
        }
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
  },
});

export const { addItem, clearItem, minusItem } = cartSlice.actions;
export default cartSlice.reducer;
