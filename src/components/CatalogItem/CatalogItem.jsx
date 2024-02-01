import {
  ImgWrapper,
  ItemWrapper,
  StyledImg,
  StyledSpan,
  StyledText,
  StyledTitle,
  TitleWrapper,
} from "./CatalogItem.styled";
import placeholderImage from "../../helpers/image/404.jpg";

const CatalogItem = ({ cars }) => {
  const addressWords = cars.address.split(" ");
  const city = addressWords[addressWords.length - 2].slice(0, -1);
  const country = addressWords[addressWords.length - 1];
  const type = cars.type;
  const model = cars.model;
  const rentalCompany = cars.rentalCompany;
  const id = cars.id;
  const accessories = cars.accessories[0];

  return (
    <>
      <ItemWrapper>
        <ImgWrapper>
          <StyledImg src={cars.img || placeholderImage} alt="fotoCars" />
        </ImgWrapper>
        <TitleWrapper>
          <StyledTitle>
            {cars.make}
            <StyledSpan>{cars.model}</StyledSpan>
          </StyledTitle>
          <StyledTitle>{cars.rentalPrice}</StyledTitle>
        </TitleWrapper>
        <StyledText>{`${city} | ${country} | ${rentalCompany} | ${type} | ${model} | ${id} | ${accessories}`}</StyledText>
        <button>learn more</button>
      </ItemWrapper>
    </>
  );
};

export default CatalogItem;
