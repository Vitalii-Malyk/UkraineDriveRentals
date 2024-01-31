import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        <h2>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
