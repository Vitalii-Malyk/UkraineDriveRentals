import {
  ImgWrapper,
  ItemWrapper,
  StyledButton,
  StyledImg,
  StyledSpan,
  StyledText,
  StyledTitle,
  TextWrapper,
  TitleWrapper,
} from "./CatalogItem.styled";
import placeholderImage from "../../helpers/image/404.jpg";

import FavoritesBtn from "../Buttons/FavoritesButton";

const CatalogItem = ({
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
}) => {
  const addressWords = address.split(" ");
  const city = addressWords[addressWords.length - 2].slice(0, -1);
  const country = addressWords[addressWords.length - 1];

  const functional = functionalities[1];

  return (
    <>
      <ItemWrapper>
        <FavoritesBtn
          advert={{
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
          }}
        />
        <ImgWrapper>
          <StyledImg src={img || placeholderImage} alt="fotoCars" />
        </ImgWrapper>
        <TitleWrapper>
          <StyledTitle>
            {make}
            <StyledSpan>{model}</StyledSpan>
          </StyledTitle>
          <StyledTitle>{rentalPrice}</StyledTitle>
        </TitleWrapper>
        <TextWrapper>
          <StyledText>{`${city} | ${country} | ${rentalCompany} | ${type} | ${model} | ${id} | ${functional}`}</StyledText>
        </TextWrapper>
        <StyledButton>Learn more</StyledButton>
      </ItemWrapper>
    </>
  );
};

export default CatalogItem;
