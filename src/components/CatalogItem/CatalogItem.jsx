import {
  ItemWrapper,
  StyledSpan,
  StyledText,
  StyledTitle,
  TitleWrapper,
} from "./CatalogItem.styled";

const CatalogItem = () => {
  return (
    <>
      <ItemWrapper>
        <img src="" alt="fotoCars" />
        <TitleWrapper>
          <StyledTitle>
            title<StyledSpan>model</StyledSpan>
          </StyledTitle>
          <StyledTitle>price</StyledTitle>
        </TitleWrapper>
        <StyledText>text</StyledText>
        <button>learn more</button>
      </ItemWrapper>
    </>
  );
};

export default CatalogItem;
