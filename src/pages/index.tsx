import type { GetServerSideProps, NextPage } from "next";
import { Provider } from "react-redux";
import { store } from "../store";
import { IResultData } from "@/modules/interfaces";
import Main from "@/components/MainContainer";

const Home: NextPage<{ data: IResultData }> = (props) => {
  const data = props?.data;  

  return (
    <Provider store={store}>
      <Main data={data} />
    </Provider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { currentPage, movieQuery } = context.query;

  const url = `https://omdbapi.com/?apikey=${process.env.API_KEY}&s=${movieQuery}&page=${currentPage}`;

  try {
    const result = await fetch(
      url
    );
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
