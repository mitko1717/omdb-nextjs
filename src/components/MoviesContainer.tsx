import { ContainerDataProps } from '@/modules/interfaces'
import React from 'react'
import Movie from './Movie';

const MoviesContainer = ({ movies }: ContainerDataProps) => {

  return (
    <div className='flex flex-wrap w-full justify-center h-screen'>
        {movies.map(movie => (
            <Movie key={movie.imdbID} movie={movie}/>
        ))}
    </div>
  )
}

export default MoviesContainer