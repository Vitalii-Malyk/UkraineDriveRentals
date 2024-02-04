import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCars,
  selectCars,
  selectFilter,
  selectFilterCars,
} from "../../redux/selectors";
import { CarItem } from "../CatalogItem";
import { makeNumberFromPrice } from "../../helpers/functions/functions";
import { LIMIT_PAGE, getAllCarsThunk, getCarsThunk } from "../../services/Api";
import { filterCarsSet, filterDelete } from "../../redux/slice/filterSlice";

import {
  CarsListStyle,
  Container,
  LoadMore,
  NotFound,
} from "./CatalogList.styled";

export const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const allCars = useSelector(selectAllCars);
  const filterCars = useSelector(selectFilterCars);
  const filter = useSelector(selectFilter);

  const [page, setPage] = useState(0);
  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    dispatch(getAllCarsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (page === 0) {
      setPage(page + 1);
      return;
    }
    dispatch(getCarsThunk(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (filter === null) {
      return;
    }

    const {
      brand,
      priceTo,
      mileage: { from, to },
    } = filter;
    if (brand === "all" && priceTo === "all" && from === "" && to === "") {
      dispatch(filterDelete());
      return;
    }

    const filterBrandCars =
      brand !== "all" && allCars.filter((car) => car.make === brand);

    const filterBrandPriceCars =
      priceTo !== "all"
        ? filterBrandCars
          ? filterBrandCars.filter(
              (car) => makeNumberFromPrice(car.rentalPrice) <= priceTo
            )
          : allCars.filter(
              (car) => makeNumberFromPrice(car.rentalPrice) <= priceTo
            )
        : false;

    let filterBrandPriceMileageCars = false;
    if (from !== "" && to !== "" && priceTo !== "all") {
      filterBrandPriceMileageCars = filterBrandPriceCars.filter(
        (car) => car.mileage > parseInt(from) && car.mileage < parseInt(to)
      );
    } else {
      if (from !== "" && to !== "" && brand !== "all") {
        filterBrandPriceMileageCars = filterBrandCars.filter(
          (car) => car.mileage > parseInt(from) && car.mileage < parseInt(to)
        );
      } else {
        filterBrandPriceMileageCars = allCars.filter(
          (car) => car.mileage > parseInt(from) && car.mileage < parseInt(to)
        );
      }
    }

    if (from !== "" && to !== "") {
      dispatch(filterCarsSet(filterBrandPriceMileageCars));
    } else {
      if (priceTo !== "all") {
        dispatch(filterCarsSet(filterBrandPriceCars));
      } else {
        if (brand !== "all") {
          dispatch(filterCarsSet(filterBrandCars));
        } else {
          return;
        }
      }
    }
  }, [dispatch, filter, allCars]);

  const totalPage = Math.ceil(allCars.length / LIMIT_PAGE);

  const onClickLoadMore = () => {
    if (page === totalPage - 1) {
      setIsLoadMore(true);
    }
    setPage(page + 1);
  };

  return (
    <Container>
      {filter !== null ? (
        filterCars?.length > 0 ? (
          <CarsListStyle>
            {filterCars?.map((car, index) => (
              <CarItem car={car} key={index} index={index} />
            ))}
          </CarsListStyle>
        ) : (
          <NotFound>
            <p>Вибачте, але по вибраним параметрам немає машин!</p>
          </NotFound>
        )
      ) : (
        cars?.length > 0 && (
          <>
            <CarsListStyle>
              {cars?.map((car, index) => (
                <CarItem car={car} key={index} index={index} />
              ))}
            </CarsListStyle>
            <LoadMore
              onClick={onClickLoadMore}
              display={isLoadMore ? "none" : "block"}
            >
              Load more
            </LoadMore>
          </>
        )
      )}
    </Container>
  );
};
