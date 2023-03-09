import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IMonth, IDay, IEvent, IState } from "@/interfaces";

interface IState {
  currentPage: number;
  totalResults: number;
  movieQuery: string;
}

const initialState: IState = {
  currentPage: 1,
  totalResults: 0,
  movieQuery: "batman",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalResults(state, action) {
      state.totalResults = action.payload;
    },
    setMovieQuery(state, action) {
      state.movieQuery = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
