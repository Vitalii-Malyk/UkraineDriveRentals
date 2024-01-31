import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import { Header, StyledLink } from "./Layout.staled";

const Layout = () => {
  return (
    <div>
      <Header>
        <h2>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          CarDiscoverUA
        </h2>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
