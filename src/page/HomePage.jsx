import {
  Description,
  HomeContainer,
  ServiceItem,
  ServiceList,
  Title,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomeContainer>
      <Title>Вітаємо в нашій службі прокату автомобілів</Title>
      <Description>
        Надаємо широкий вибір автомобілів в оренду за доступними цінами.
        Обирайте авто, яке вам потрібно, і насолоджуйтеся подорожжю.
      </Description>
      <ServiceList>
        <ServiceItem>Широкий вибір автомобілів</ServiceItem>
        <ServiceItem>Гнучкі тарифи та умови</ServiceItem>
        <ServiceItem>Професійне обслуговування</ServiceItem>
        <ServiceItem>Зручне онлайн-бронювання</ServiceItem>
      </ServiceList>
    </HomeContainer>
  );
};

export default HomePage;
