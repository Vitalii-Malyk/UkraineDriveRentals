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

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://65babcceb4d53c0665538e25.mockapi.io/cars")
      .then((response) => {
        console.log(response.data);
        setCars(response.data);
        setIsLoading(false);
        setShowNotFound(response.data.length === 0);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setVisibleCars(12);
  }, [searchTermProp]);

  const loadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 12);
  };

  const filteredCars = cars;

  return (
    <ListWrapper>
      {showNotFound && <NotFoundMessage />}
      <List>
        {filteredCars.slice(0, visibleCars).map((car, index) => (
          <CatalogItem cars={car} key={index} />
        ))}
        {isLoading && <Loader />}
      </List>
      {!isLoading && visibleCars < filteredCars.length && (
        <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
      )}
    </ListWrapper>
  );
};

export default CatalogList;
