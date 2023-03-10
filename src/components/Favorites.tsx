import { FC } from "react";
import { useAppSelector } from "@/hooks/redux";
import { FavoritesProps } from "@/modules/interfaces";
import Movie from "./Movie";

const Favorites: FC<FavoritesProps> = ({ setIsfavoritesOpen }) => {
  const { favoritesMovies } = useAppSelector((state) => state.data);

  const closeFavHandler = () => {
    setIsfavoritesOpen(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-200"
          onClick={closeFavHandler}
        >
          BACK TO MAIN PAGE
        </button>
      </div>

      <div className="flex flex-wrap w-full justify-center h-auto">
        {favoritesMovies.length === 0 && (
          <h2 className="font-bold text-3xl mt-6">
            THERE IS NO CHOSEN FAVORITES MOVIES
          </h2>
        )}
        {favoritesMovies &&
          favoritesMovies.map((movie) => <Movie movie={movie} />)}
      </div>
    </div>
  );
};

export default Favorites;
