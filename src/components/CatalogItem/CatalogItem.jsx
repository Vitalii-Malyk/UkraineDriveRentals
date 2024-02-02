import { useDispatch, useSelector } from "react-redux";
import {
  ImgWrapper,
  ItemWrapper,
  StyledButton,
  StyledIconButton,
  StyledImg,
  StyledSpan,
  StyledText,
  StyledTitle,
  TextWrapper,
  TitleWrapper,
} from "./CatalogItem.styled";
import placeholderImage from "../../helpers/image/404.jpg";
import { toggleFavorite } from "../../redux/slice";
import HeartIcon from "../HeartIcon/HeartIcon";

const CatalogItem = ({ cars }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.favorites.includes(cars.id));

  const addressWords = cars.address.split(" ");
  const city = addressWords[addressWords.length - 2].slice(0, -1);
  const country = addressWords[addressWords.length - 1];
  const type = cars.type;
  const model = cars.model;
  const rentalCompany = cars.rentalCompany;
  const id = cars.id;
  const accessories = cars.accessories[1];

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <>
      <ItemWrapper>
        <StyledIconButton onClick={handleFavoriteToggle}>
          {isFavorite ? <HeartIcon /> : <HeartIcon />}
        </StyledIconButton>
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
        <TextWrapper>
          <StyledText>{`${city} | ${country} | ${rentalCompany} | ${type} | ${model} | ${id} | ${accessories}`}</StyledText>
        </TextWrapper>
        <StyledButton>Learn more</StyledButton>
      </ItemWrapper>
    </>
  );
};

export default CatalogItem;
