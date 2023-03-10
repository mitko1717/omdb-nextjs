import { FC } from "react";
import { useActions } from "@/hooks/actions";
import { useAppSelector } from "@/hooks/redux";
import { IMovieProps } from "@/modules/interfaces";
import Image from "next/image";
import Link from "next/link";
import Bookmark from "./Icons/Bookmark";

const Movie: FC<IMovieProps> = ({ movie }) => {
  const { addToFavorites } = useActions();
  const { favoritesMovies } = useAppSelector((state) => state.data);

  const notAvailableFotoLink =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

  const addToFavoritesHandler = (e: React.FormEvent<EventTarget>) => {
    e.stopPropagation();
    addToFavorites(movie);
  };

  const checkIfAddedToFavorites = () => {
    return favoritesMovies.some((obj) => obj.imdbID === movie.imdbID);
  };

  return (
    <Link href={`/movie/${movie.imdbID}`} legacyBehavior>
      <div className="bg-[#464646] relative m-4 p-2 flex flex-col w-[300px] h-[350px] items-center cursor-pointer shadow hover:shadow-xl transition ease-in-out duration-200">
        <h3 className="font-bold h-10 text-center">{movie.Title}</h3>
        <p className="py-2">Year: {movie.Year}</p>
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : notAvailableFotoLink}
          alt={movie.Title}
          width={150}
          height={250}
        />

        <span
          className={`absolute bottom-5 right-5 hover:bg-slate-500 hover:opacity-50 ${
            checkIfAddedToFavorites() && "bg-slate-300"
          } p-1 rounded-md transition ease-in-out duration-200`}
          onClick={addToFavoritesHandler}
        >
          <Bookmark />
        </span>
      </div>
    </Link>
  );
};

export default Movie;
