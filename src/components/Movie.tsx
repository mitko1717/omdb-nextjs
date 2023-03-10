import { FC } from "react";
import Image from "next/image";
import { IMovieProps } from "@/modules/interfaces";
import Link from "next/link";

const Movie: FC<IMovieProps> = ({ movie }) => {
  const notAvailableFotoLink =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

  return (
    <Link href={`/movie/${movie.imdbID}`} legacyBehavior>
      <div className="bg-[#464646] m-4 p-2 flex flex-col w-[300px] h-[350px] items-center cursor-pointer shadow hover:shadow-xl transition ease-in-out duration-200">
        <h3 className="font-bold h-10 text-center">{movie.Title}</h3>
        <p className="py-2">Year: {movie.Year}</p>
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : notAvailableFotoLink}
          alt={movie.Title}
          width={150}
          height={250}
        />
      </div>
    </Link>
  );
};

export default Movie;
