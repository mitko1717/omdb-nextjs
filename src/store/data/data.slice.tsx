import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IMonth, IDay, IEvent, IState } from "@/interfaces";

interface IState {
  page: number
  totalResults: number
}

const initialState: IState = {
  page: 2,
  totalResults: 0
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload
    },
    setTotalResults(state, action) {
      state.totalResults = action.payload
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
