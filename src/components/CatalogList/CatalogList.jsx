import { useEffect, useState } from "react";
import { List, ListWrapper, LoadMoreButton } from "./CatalogList.styled";
import NotFoundMessage from "../NotAutoMessage/NotAutoMessage";
import Loader from "../Loader/Loader";
import CatalogItem from "../CatalogItem/CatalogItem";
import axios from "axios";

const CatalogList = ({ searchTermProp }) => {
  const [showNotFound, setShowNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState(12);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://65babcceb4d53c0665538e25.mockapi.io/cars?limit=${visibleCars}&page=1`
      )
      .then((response) => {
        const data = response.data;
        setCars(data);
        setIsLoading(false);
        setShowNotFound(data.length === 0);
        setHasMoreData(data.length >= visibleCars);
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
        setIsLoading(false);
      });
  }, [visibleCars]);

  useEffect(() => {
    setVisibleCars(12);
  }, [searchTermProp]);

  const loadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 12);
  };

  return (
    <ListWrapper>
      {showNotFound && <NotFoundMessage />}
      <List>
        {cars.map((car, index) => (
          <CatalogItem cars={car} key={index} />
        ))}
        {isLoading && <Loader />}
      </List>
      {!isLoading && hasMoreData && (
        <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
      )}
    </ListWrapper>
  );
};

export default CatalogList;
