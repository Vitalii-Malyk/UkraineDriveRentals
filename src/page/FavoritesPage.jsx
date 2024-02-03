import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites, selectTotalFavorites } from "../redux/selectors";
import CatalogList from "../components/CatalogList/CatalogList";

const FavoritePage = () => {
  const totalFavorites = useSelector(selectTotalFavorites);
  const favAdverts = useSelector(selectFavorites);

  return (
    <div>
      {totalFavorites > 0 ? (
        <CatalogList adverts={favAdverts} />
      ) : (
        <div>
          <p>There are no adverts yet</p>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
