import { FC, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { IData } from "@/modules/interfaces";
import { useRouter } from "next/router";
import { useActions } from "@/hooks/actions";
import { useAppSelector } from "@/hooks/redux";
import MoviesContainer from "@/components/MoviesContainer";
import Header from "@/components/Header";
import Pagination from "./Pagination";
import Favorites from "./Favorites";

const Main: FC<{ data: IData }> = (props) => {
  const { currentPage, movieQuery } = useAppSelector((state) => state.data);
  const { setTotalResults } = useActions();
  const [isFavoritesOpen, setIsfavoritesOpen] = useState(false);

  const movies = props?.data?.movies.Search;
  const router = useRouter();

  const setTotakResultsHandler = () => {
    setTotalResults(props?.data?.movies?.totalResults);
  };

  const changePage = () => {
    if (!isFavoritesOpen) {
      router.push({
        query: { ...router.query, currentPage, movieQuery },
      });
    } else {
      router.replace("/#favorites");
    }
  };

  useEffect(() => {
    changePage();
  }, [currentPage, movieQuery, isFavoritesOpen]);

  useEffect(() => {
    setTotakResultsHandler();
  }, [props]);

  return (
    <Provider store={store}>
      {!isFavoritesOpen && (
        <div className="bg-[#3e3e3e] w-full flex flex-col">
          <Header setIsfavoritesOpen={setIsfavoritesOpen} />
          <MoviesContainer movies={movies} />
          <Pagination />
        </div>
      )}
      {isFavoritesOpen && <Favorites setIsfavoritesOpen={setIsfavoritesOpen} />}
    </Provider>
  );
};

export default Main;
