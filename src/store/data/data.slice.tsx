import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IMonth, IDay, IEvent, IState } from "@/interfaces";

const initialState = {

};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {

  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
