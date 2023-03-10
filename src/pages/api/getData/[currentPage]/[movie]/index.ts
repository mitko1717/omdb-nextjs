import type { NextApiRequest, NextApiResponse } from "next";
import { IMovieShortInfo } from "../../../../../modules/interfaces";

const getMovies = async (currentPage: number | string, movieQuery: string) => {
  const url = `https://omdbapi.com/?apikey=${process.env.API_KEY}&s=${movieQuery}&page=${currentPage}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (e) {
    return null;
  }
};

type Data = {
  movies: IMovieShortInfo[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { currentPage, movie } = req.query;

  const movies = await getMovies(
    currentPage && typeof currentPage === "string" ? currentPage : 1,
    movie && typeof movie === "string" ? movie : "batman"
  );

  res.status(200).json({ movies });
}
