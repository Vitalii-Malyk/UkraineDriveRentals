import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import sprite from "../../helpers/icons/sprite.svg";
import { selectFavoriteCars } from "../../redux/selectors";
import { addFavorite, deleteFavorite } from "../../redux/slice/favoriteSlice";
import { ModalReadMore } from "../Modal";
import placeholderImage from "../../helpers/image/404.jpg";
import {
  Button,
  CarCard,
  CarItemStyle,
  DescriptItem,
  DescriptList,
  DescriptListWrap,
  DescriptionWrap,
  Heart,
  Img,
  ImgWrap,
  Span,
  TitleH3,
  TitleWrap,
} from "./CatalogItem.styled";

export const CarItem = ({ car, index }) => {
  const dispatch = useDispatch();
  const favoriteCarsId = useSelector(selectFavoriteCars);

  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    address,
  } = car;

  const cityCountry = address?.split(", ").slice(-2);

  const [isCarFavorite, setIsCarFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (favoriteCarsId?.some((car) => car.id === id)) {
      setIsCarFavorite(true);
    } else {
      setIsCarFavorite(false);
    }
  }, [favoriteCarsId, id]);

  const onClickHeart = () => {
    isCarFavorite ? dispatch(deleteFavorite(id)) : dispatch(addFavorite(car));
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <CarItemStyle>
      {showModal && <ModalReadMore onClick={toggleModal} car={car} />}
      <CarCard>
        <ImgWrap>
          <Img src={img || placeholderImage} alt={make} />
          <Heart
            onClick={onClickHeart}
            fill={isCarFavorite ? "var(--color-button)" : "none"}
            stroke={
              isCarFavorite
                ? "var(--color-button)"
                : "var(--color-text-button-and-bg)"
            }
          >
            <use href={`${sprite}#icon-heart`} />
          </Heart>
        </ImgWrap>
        <DescriptionWrap>
          <TitleWrap>
            <TitleH3>
              {make}
              {index < 3 && <Span> {model}</Span>}, {year}
            </TitleH3>
            <p>{rentalPrice}</p>
          </TitleWrap>
          <DescriptListWrap>
            <DescriptList>
              <DescriptItem>{cityCountry[0]}</DescriptItem>
              <DescriptItem>{cityCountry[1]}</DescriptItem>
              <DescriptItem>{rentalCompany}</DescriptItem>
            </DescriptList>
            <DescriptList>
              <DescriptItem>{type}</DescriptItem>
              <DescriptItem>
                {" "}
                {index === 10 ? make : index === 0 || index > 4 ? model : make}
              </DescriptItem>
              <DescriptItem>{id}</DescriptItem>
              <DescriptItem>{functionalities[0]}</DescriptItem>
            </DescriptList>
          </DescriptListWrap>
        </DescriptionWrap>
      </CarCard>
      <Button onClick={toggleModal}>Learn more</Button>
    </CarItemStyle>
  );
};
