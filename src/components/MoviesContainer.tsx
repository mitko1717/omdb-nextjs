import { ContainerDataProps } from '@/modules/interfaces'
import React from 'react'

const MoviesContainer = ({ movies }: ContainerDataProps) => {
  return (
    <div>{JSON.stringify(movies, null, 0)}</div>
  )
}

export default MoviesContainer