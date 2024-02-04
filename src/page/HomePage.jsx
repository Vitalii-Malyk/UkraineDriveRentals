import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAllCars } from "../redux/selectors";
import { getAllCarsThunk } from "services/Api";

import {
  Description,
  HomeContainer,
  ServiceItem,
  ServiceList,
  Title,
} from "./HomePage.styled";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarsThunk());
  }, [dispatch]);

  const staticAllCars = useSelector(selectAllCars);

  return (
    <HomeContainer>
      <Title>Вітаємо в нашій службі прокату автомобілів</Title>
      <Description>
        Надаємо широкий вибір автомобілів в оренду за доступними цінами.
        Обирайте авто, яке вам потрібно, і насолоджуйтеся подорожжю.
      </Description>
      <ServiceList>
        <ServiceItem>
          Широкий вибір автомобілів ({staticAllCars.length})
        </ServiceItem>
        <ServiceItem>Гнучкі тарифи та умови</ServiceItem>
        <ServiceItem>Професійне обслуговування</ServiceItem>
        <ServiceItem>Зручне онлайн-бронювання</ServiceItem>
      </ServiceList>
    </HomeContainer>
  );
};

export default HomePage;
