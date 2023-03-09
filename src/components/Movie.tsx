import { FC } from 'react'
import Image from "next/image";
import { IMovieShortInfo } from '@/modules/interfaces'

interface IMovie {
    movie: IMovieShortInfo
}

const Movie: FC<IMovie> = ({ movie }) => {
    
  return (
    <div className='bg-[#464646] m-4 p-2 flex flex-col w-[300px] items-center cursor-pointer shadow hover:shadow-xl transition ease-in-out duration-200'>
        <h3 className='font-bold h-10 text-center'>{movie.Title}</h3>
        <p className='py-2'>Year: {movie.Year}</p>
        <Image src={movie.Poster} alt={movie.Title} width={200} height={300}/>
    </div>
  )
}

export default Movie