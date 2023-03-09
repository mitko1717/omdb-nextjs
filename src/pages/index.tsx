import type { GetServerSideProps, NextPage } from "next";
import { Provider } from "react-redux";
import { store } from "../store";
import { IData } from "@/modules/interfaces";
import Main from "@/components/MainContainer";

const Home: NextPage<{ data: IData }> = (props) => {
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

  try {
    const result = await fetch(
      `http://localhost:3000/api/getData/${currentPage}/${movieQuery}`
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
