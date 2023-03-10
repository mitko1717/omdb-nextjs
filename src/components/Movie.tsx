import { FC, useEffect, useState } from "react";
import { useActions } from "@/hooks/actions";
import { useAppSelector } from "@/hooks/redux";
import { IMovieProps } from "@/modules/interfaces";
import Image from "next/image";
import Link from "next/link";
import Bookmark from "./Icons/Bookmark";

const Movie: FC<IMovieProps> = ({ movie }) => {
  const { addToFavorites, removeFromFavorites } = useActions();
  const { favoritesMovies } = useAppSelector((state) => state.data);
  const [bg, setBg] = useState("blue");

  const notAvailableFotoLink =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

  const checkIfAddedToFavorites = () => {
    return favoritesMovies.some((obj) => obj.imdbID === movie.imdbID);
  };

  const setFavoriteHandler = (e: React.FormEvent<EventTarget>) => {
    e.stopPropagation();
    if (!checkIfAddedToFavorites()) addToFavorites(movie);
    if (checkIfAddedToFavorites()) removeFromFavorites(movie);
  };

  useEffect(() => {
    if (checkIfAddedToFavorites()) setBg("bg-slate-300");
  }, [movie, favoritesMovies]);

  return (
    <Link href={`/movie/${movie.imdbID}`} legacyBehavior>
      <div className="bg-[#464646] relative m-4 p-2 flex flex-col w-[300px] h-[350px] items-center cursor-pointer shadow hover:shadow-xl transition ease-in-out duration-200">
        <h3 className="font-bold h-10 text-center">{movie.Title}</h3>
        <p className="py-2">Year: {movie.Year}</p>
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : notAvailableFotoLink}
          alt={movie.Title}
          width={150}
          height={0}
          className="w-auto h-auto"
        />

        <span
          className={`absolute bottom-5 right-5 hover:bg-slate-500 hover:opacity-50 ${bg} p-1 rounded-md transition ease-in-out duration-200`}
          onClick={setFavoriteHandler}
        >
          <Bookmark />
        </span>
      </div>
    </Link>
  );
};

export default Movie;
