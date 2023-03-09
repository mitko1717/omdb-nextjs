import type { NextApiRequest, NextApiResponse } from "next";
import { IMovieShortInfo } from '../../../../../modules/interfaces';

const APIKEY = '8dd4c804'

const getMovies = async (page: number | string, movieQuery: string) => {      
  const url = `https://omdbapi.com/?apikey=${APIKEY}&s=${movieQuery}&page=${page}`

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
    const { page, movie } = req.query
    
    const movies = await getMovies(page && typeof page === 'string' ? page : 1, movie && typeof movie === 'string' ? movie : 'batman');
    
    res.status(200).json({ movies });
}
