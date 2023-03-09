import { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { Provider } from "react-redux";
import { store } from "../store";
import { IData } from "@/modules/interfaces";
import { useRouter } from "next/router";
import MoviesContainer from "@/components/MoviesContainer";
import Header from "@/components/Header";
import { useActions } from "@/hooks/actions";
import Main from "@/components/MainContainer";

const Home: NextPage<{ data: IData }> = (props) => {
  // const [page, SetPage] = useState(1);
  // const [movieQuery, setMovieQuery] = useState("batman");

  // const { setTotalResults } = useActions();

  const data = props?.data;
  // const totalResults = props?.data?.movies?.totalResults;
  // const router = useRouter();

  // const setTotakResultsHandler = () => {
  //   setTotalResults(totalResults);
  // };

  // const changePage = () => {
  //   router.push({
  //     query: { ...router.query, page, movieQuery },
  //   });
  // };

  // useEffect(() => {
  //   changePage();
  // }, [page, movieQuery]);

  // useEffect(() => {
  //   setTotakResultsHandler();
  // }, [props]);

  return (
    <Provider store={store}>
      <Main data={data} />
      {/* <div className="bg-[#3e3e3e] w-full flex flex-col">
        <Header setMovieQuery={setMovieQuery} />
        <MoviesContainer movies={movies} />
      </div> */}
    </Provider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { currentPage, movieQuery } = context.query;

  try {
    console.log("context.query", context.query);

    const result = await fetch(
      `http://localhost:3000/api/getData/${currentPage}/${movieQuery}`
    );
    const data = await result.json();

    console.log("data", data.movies.Search[0]);

    return {
      props: { data },
    };
  } catch {
    return {
      props: {},
    };
  }
};
