import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import GlobalStyle from "../../styles/GlobalStyle.js";

import CatalogPage from "../../page/CatalogPage.jsx";
import FavoritesPage from "../../page/FavoritesPage.jsx";
import HomePage from "../../page/HomePage.jsx";
import Loader from "../Loader/Loader.jsx";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
}

export default App;