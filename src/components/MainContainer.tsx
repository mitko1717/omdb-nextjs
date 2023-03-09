import { FC, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { IData } from "@/modules/interfaces";
import { useRouter } from "next/router";
import { useActions } from "@/hooks/actions";
import { useAppSelector } from "@/hooks/redux";
import MoviesContainer from "@/components/MoviesContainer";
import Header from "@/components/Header";
import Pagination from "./Pagination";

const Main: FC<{ data: IData }> = (props) => {
  const { currentPage, movieQuery } = useAppSelector((state) => state.data);
  const { setTotalResults } = useActions();

  const movies = props?.data?.movies.Search;
  const router = useRouter();

  const setTotakResultsHandler = () => {
    setTotalResults(props?.data?.movies?.totalResults);
  };

  const changePage = () => {
    router.push({
      query: { ...router.query, currentPage, movieQuery },
    });
  };

  useEffect(() => {
    changePage();
  }, [currentPage, movieQuery]);

  useEffect(() => {
    setTotakResultsHandler();
  }, [props]);

  return (
    <Provider store={store}>
      <div className="bg-[#3e3e3e] w-full flex flex-col">
        <Header />
        <MoviesContainer movies={movies} />
        <Pagination />
      </div>
    </Provider>
  );
};

export default Main;
