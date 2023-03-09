import { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { Provider } from "react-redux";
import { store } from "../store";
import { IResaultData } from "@/modules/interfaces";
import { useRouter } from "next/router";
import MoviesContainer from "@/components/MoviesContainer";
import Header from "@/components/Header";

type IData = {
  movies: IResaultData;
};

const Home: NextPage <{ data: IData }> = (props) => {
  const [page, SetPage] = useState(1)
  const [movieQuery, setMovieQuery] = useState('batman')
  
  const movies = props?.data?.movies.Search;  
  const router = useRouter();

  const changePage = () => {
    router.push({
      query: { ...router.query, page, movieQuery }
    });  
  }

  useEffect(() => {
    changePage()
  }, [page, movieQuery])

  return (
    <Provider store={store}>
      <div className="bg-[#3e3e3e] w-full flex flex-col">
        <Header setMovieQuery={setMovieQuery}/>
        <MoviesContainer movies={movies}/>
      </div>
    </Provider>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {    
  const { page, movieQuery } = context.query    
  
  try {    
    const result = await fetch(`http://localhost:3000/api/getData/${page}/${movieQuery}`);
    const data = await result.json();

    return {
      props: { data },
    };
  } catch {
    return {
      props: {},
    };
  }
};
