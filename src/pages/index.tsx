import type { GetServerSideProps, NextPage } from "next";
import { Provider } from "react-redux";
import { store } from "../store";

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <div className="bg-[#3e3e3e] h-[100vh] w-full flex flex-col">
        <h1>saasas</h1>
        {/* <Container calendar={calendar} /> */}
      </div>
    </Provider>
  )
}

export default Home
