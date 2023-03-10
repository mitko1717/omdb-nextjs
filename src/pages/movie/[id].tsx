import { IMovieDetailsProps } from "@/modules/interfaces";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";

const Movie = (props: IMovieDetailsProps) => {
  const { movie } = props;
  const notAvailableFotoLink =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

  return (
    <div className="p-4">
      <Link href={"/"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200">
          BACK TO MAIN PAGE
        </button>
      </Link>

      {!movie && <div>Movie details are loading...</div>}

      {movie && (
        <div className="items-center mt-6">
          <h2 className="font-bold text-3xl">{movie.Title}</h2>
          <p className="my-2">
            <span className="font-bold">Plot:</span> {movie.Plot}
          </p>
          <p className="my-2">
            <span className="font-bold">Actors:</span> {movie.Actors}
          </p>
          <p className="my-2">
            <span className="font-bold">imdbRating:</span> {movie.imdbRating}
          </p>
          <p className="my-2">
            <span className="font-bold">Country:</span> {movie.Country}
          </p>
          <p className="my-2">
            <span className="font-bold">Director:</span> {movie.Director}
          </p>
          <p className="my-2">
            <span className="font-bold">Genre:</span> {movie.Genre}
          </p>
          <Image
            src={movie.Poster !== "N/A" ? movie.Poster : notAvailableFotoLink}
            alt={movie.Title}
            width={350}
            height={450}
          />
          <p className="mt-2">
            <span className="font-bold">Runtime:</span> {movie.Runtime}
          </p>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const result = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${id}`
    );
    const movie = await result.json();

    return {
      props: { movie },
    };
  } catch {
    return {
      props: {},
    };
  }
};

export default Movie