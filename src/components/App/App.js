import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";

import CatalogPage from "../../page/CatalogPage.jsx";
import FavoritesPage from "../../page/FavoritesPage.jsx";
import HomePage from "../../page/HomePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
