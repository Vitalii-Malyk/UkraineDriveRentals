import { List, ListWrapper, LoadMoreButton } from "./CatalogList.styled";
// import NotFoundMessage from "../NotAutoMessage/NotAutoMessage";
import Loader from "../Loader/Loader";
import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogList = ({ adverts }) => {
  return (
    <ListWrapper>
      <List>
        {adverts.map(
          (
            {
              make,
              img,
              id,
              years,
              mileage,
              rentalPrice,
              type,
              model,
              address,
              rentalCompany,
              functionalities,
            },
            index
          ) => (
            <CatalogItem
              key={index}
              make={make}
              img={img}
              id={id}
              years={years}
              mileage={mileage}
              rentalPrice={rentalPrice}
              type={type}
              model={model}
              address={address}
              rentalCompany={rentalCompany}
              functionalities={functionalities}
            />
          )
        )}
      </List>
    </ListWrapper>
  );
};

export default CatalogList;
