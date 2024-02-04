import { useSelector } from "react-redux";

import { CarItem } from "../../components/CatalogItem";
import { selectFavoriteCars } from "../../redux/selectors";

import { Section } from "./FavoritePage.styled";
import {
  CarsListStyle,
  Container,
  NotFound,
} from "../../components/CatalogList/CatalogList.styled";

const Favorite = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <Section>
      <Container>
        {favoriteCars?.length > 0 ? (
          <CarsListStyle>
            {favoriteCars?.map((car, index) => (
              <CarItem car={car} key={index} />
            ))}
          </CarsListStyle>
        ) : (
          <NotFound>
            <p>Немає обраних автомобілів, додайте автомобілі в обране</p>
          </NotFound>
        )}
      </Container>
    </Section>
  );
};

export default Favorite;
