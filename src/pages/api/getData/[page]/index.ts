import type { NextApiRequest, NextApiResponse } from "next";
import { IMovieShortInfo } from '../../../../modules/interfaces';

const APIKEY = '8dd4c804'

const getMovies = async (page: number | string) => {      
  const url = `https://omdbapi.com/?apikey=${APIKEY}&s=batman&page=${page}`

  try {
    const res = await fetch(url)
    const data = await res.json()
     
    return data
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
  console.log('req.query PAGE,', req.query);
  
    const { page } = req.query
    
    const movies = await getMovies(page && typeof page === 'string' ? page : 1);
    res.status(200).json({ movies });
}
