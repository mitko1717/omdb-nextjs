import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieShortInfo, IState } from "@/modules/interfaces";

const favoritesMoviesLS =
  typeof window !== "undefined" && localStorage.getItem("favoritesMovies")
    ? JSON.parse(localStorage.getItem("favoritesMovies") || "")
    : [];

const movieQueryLS =
  typeof window !== "undefined" && localStorage.getItem("movieQuery")
    ? localStorage.getItem("movieQuery" || "")
    : "";

const currentPageLS =
  typeof window !== "undefined" && localStorage.getItem("currentPage")
    ? localStorage.getItem("currentPage")
    : 1;

const initialState: IState = {
  currentPage: (currentPageLS && +currentPageLS) || 2,
  totalResults: 0,
  movieQuery: (movieQueryLS && movieQueryLS) || "batman",
  favoritesMovies: favoritesMoviesLS || [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;

      localStorage.setItem("currentPage", JSON.stringify(state.currentPage));
    },
    setTotalResults(state, action) {
      state.totalResults = action.payload;
    },
    setMovieQuery(state, action) {
      state.movieQuery = action.payload;
      state.currentPage = 1;

      localStorage.setItem("movieQuery", JSON.stringify(state.movieQuery));
    },
    addToFavorites(state, action: PayloadAction<IMovieShortInfo>) {
      state.favoritesMovies.push(action.payload);
      localStorage.setItem(
        "favoritesMovies",
        JSON.stringify(state.favoritesMovies)
      );
    },
    removeFromFavorites(state, action: PayloadAction<IMovieShortInfo>) {
      state.favoritesMovies = state.favoritesMovies.filter(
        (obj) => obj.imdbID !== action.payload.imdbID
      );
      localStorage.setItem(
        "favoritesMovies",
        JSON.stringify(state.favoritesMovies)
      );
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
