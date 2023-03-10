import { useActions } from "@/hooks/actions";
import { useAppSelector } from "@/hooks/redux";

const Favorites = () => {
  const { addToFavorites } = useActions();
  const { favoritesMovies } = useAppSelector((state) => state.data);

  return (
    <div className="p-4">
        Favorites
    </div>
  )
};

export default Favorites;
