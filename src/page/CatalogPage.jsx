import { CarsList } from "../components/CatalogList";
import { Filters } from "../components/CatalogForm";

import { Container } from "./CatalogPage.styled";

const Catalog = () => {
  return (
    <>
      <Container>
        <Filters />
      </Container>
      <CarsList />
    </>
  );
};

export default Catalog;
