import type { NextApiRequest, NextApiResponse } from "next";
import { IMovie } from './../../modules/interfaces';

type Data = {
  movies: IMovie[];
};

const url = `https://www.omdbapi.com/?s=Batman&page=1&apikey=8dd4c804`
const APIKEY = '8dd4c804'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
//   res.status(200).json({ movies });
}
