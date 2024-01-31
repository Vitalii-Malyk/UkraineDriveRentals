import { useEffect, useState } from "react";
import { List, ListWrapper } from "./CatalogList.styled";
import NotFoundMessage from "../NotAutoMessage/NotAutoMessage";
import Loader from "../Loader/Loader";
import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogList = () => {
  const [showNotFound, setShowNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  //  const filteredCars = cars.filter(({ title }) =>
  //    filters.search
  //      ? title.toLowerCase().includes(filters.search.toLowerCase())
  //      : cars
  //  );

  return (
    <ListWrapper>
      {showNotFound && <NotFoundMessage />}
      <List>
        {filteredCars.map((cars, index) => (
          <CatalogItem cars={cars} key={index} />
        ))}
        {isLoading && <Loader />}
      </List>
    </ListWrapper>
  );
};

export default CatalogList;
