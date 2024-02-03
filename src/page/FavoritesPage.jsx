import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/selectors";
import AdvertsList from "../components/CatalogList/CatalogList";

const FavoritesPage = () => {
  const favoriteAdverts = useSelector(selectFavorites);
  return <>{favoriteAdverts && <AdvertsList adverts={favoriteAdverts} />}</>;
};

export default FavoritesPage;
