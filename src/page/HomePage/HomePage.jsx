import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAllCars, selectCarBrands } from "../../redux/selectors";
import { getAllCarsThunk } from "services/Api";

import {
  Description,
  HomeContainer,
  ServiceItem,
  ServiceList,
  ServiceListText,
  Title,
} from "./HomePage.styled";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarsThunk());
  }, [dispatch]);

  const staticAllCars = useSelector(selectAllCars);
  const carBrands = useSelector(selectCarBrands);

  const modelBrands = carBrands.slice(1).map((item) => item.value);

  return (
    <HomeContainer>
      <Title>Вітаємо у UkraineDriveRentals</Title>
      <Description>
        Надаємо широкий вибір автомобілів в оренду за доступними цінами.
        Обирайте авто, яке вам потрібно, і насолоджуйтеся подорожжю.
      </Description>
      <Description>
        Широкий вибір автомобілів (
        {staticAllCars ? staticAllCars.length + " авто" : ""})
      </Description>
      <Description>Широкий вибір моделей автомобілів таких як</Description>
      {modelBrands ? (
        <ServiceList>
          {modelBrands.map((value, index) => (
            <ServiceItem key={index}>{value}</ServiceItem>
          ))}
        </ServiceList>
      ) : (
        ""
      )}
      <ServiceListText>
        <ServiceItem>Гнучкі тарифи та умови</ServiceItem>
        <ServiceItem>Професійне обслуговування</ServiceItem>
        <ServiceItem>Зручне онлайн-бронювання</ServiceItem>
      </ServiceListText>
    </HomeContainer>
  );
};

export default HomePage;
