import { ContainerDataProps } from "@/modules/interfaces";
import Link from "next/link";
import React from "react";
import Movie from "./Movie";

const MoviesContainer = ({ movies }: ContainerDataProps) => {
  if (movies && movies.length > 0) {
    return (
      <div className="flex flex-wrap w-full justify-center h-auto">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="text-center px-4 mt-8 font-bold">
        THERE IS NO RESULT BY THIS QUERY. TRY TO FIND SOMETHING MORE RELATIVE
      </div>
    );
  }
};

export default MoviesContainer;
