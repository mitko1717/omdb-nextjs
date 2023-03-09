import type { NextApiRequest, NextApiResponse } from "next";
// import { IMovieShortInfo } from "../../../../modules/interfaces";

const APIKEY = "8dd4c804";

const getMovies = async (currentPage: number | string) => {
  const url = `https://omdbapi.com/?apikey=${APIKEY}&s=batman&page=${currentPage}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (e) {
    return null;
  }
};

// type Data = {
//   movies: IMovieShortInfo[];
// };

export default async function handler(
  req: NextApiRequest,
//   res: NextApiResponse<Data>
  res: NextApiResponse
) {
  const { currentPage } = req.query;

  const movies = await getMovies(
    currentPage && typeof currentPage === "string" ? currentPage : 1
  );
  res.status(200).json({ movies });
}
