import { useEffect, useState } from "react";
import { List, ListWrapper } from "./CatalogList.styled";
import NotFoundMessage from "../NotAutoMessage/NotAutoMessage";
import Loader from "../Loader/Loader";
import CatalogItem from "../CatalogItem/CatalogItem";
import axios from "axios";

const CatalogList = () => {
  const [showNotFound, setShowNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    axios
      .get("https://65babcceb4d53c0665538e25.mockapi.io/cars")
      .then((response) => {
        console.log(response.data);
        setCars(response.data);
        // setBrands(response.data);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

  // useEffect(() => {
  //   if (!cars.length && !isLoading) {
  //     const timeoutId = setTimeout(() => {
  //       setShowNotFound(true);
  //     }, 100);

  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   } else {
  //     setShowNotFound(false);
  //   }
  // }, [cars, isLoading]);

  // const filteredCars = cars.filter(({ title }) =>
  //   filters.search
  //     ? title.toLowerCase().includes(filters.search.toLowerCase())
  //     : cars
  // );

  return (
    <ListWrapper>
      {showNotFound && <NotFoundMessage />}
      <List>
        {cars.map((car, index) => (
          <CatalogItem cars={car} key={index} />
        ))}
        {isLoading && <Loader />}
      </List>
    </ListWrapper>
  );
};

export default CatalogList;
