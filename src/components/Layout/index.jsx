import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectAppState } from "../../redux/selectors";
import Header from "../Header";
import Loader from "../Loader";
import Footer from "../Footer";
import { Main } from "./Layout.styled";

const Layout = () => {
  const { isLoading } = useSelector(selectAppState);
  return (
    <>
      <Header />
      <Main>
        {isLoading && <Loader />}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
