import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieDetailInfo, IMovieShortInfo } from "@/modules/interfaces";

interface IState {
  currentPage: number;
  totalResults: number;
  movieQuery: string;
  favoritesMovies: IMovieShortInfo[];
}

const initialState: IState = {
  currentPage: 1,
  totalResults: 0,
  movieQuery: "batman",
  favoritesMovies: [],
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
    addToFavorites(state, action: PayloadAction<IMovieShortInfo>) {
      state.favoritesMovies.push(action.payload);
    },
    removeFromFavorites(state, action: PayloadAction<IMovieShortInfo>) {
      state.favoritesMovies = state.favoritesMovies.filter(
        (obj) => obj.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
