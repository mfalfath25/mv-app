import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  page: number;
}

const initialState: IState = {
  page: 1,
};

export const dataSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    next: (state) => {
      state.page += 1;
    },
    prev: (state) => {
      state.page -= 1;
    },
    setCustomPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    reset: (state) => {
      state.page = 1;
    },
  },
});

export const { next, prev, setCustomPage, reset } = dataSlice.actions;

export default dataSlice.reducer;
