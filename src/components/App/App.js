import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Layout from "../../components/Layout";

const HomePage = lazy(() => import("../../page/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../page/CatalogPage/CatalogPage"));
const FavoritePage = lazy(() =>
  import("../../page/FavoritesPage/FavoritesPage")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
