import styled from "styled-components";

export const ItemWrapper = styled("div")`
  height: 426px;
  width: 274px;
  border-radius: 10%;
  position: relative;
`;

export const TitleWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const StyledSpan = styled("span")`
  color: #3470ff;
`;

export const ImgWrapper = styled("div")`
  width: 274px;
  height: 268px;
  border-radius: 12px;
  margin-bottom: 14px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const StyledImg = styled("img")`
  height: 100%;
  width: auto;
`;

export const StyledTitle = styled("p")`
  color: #121417;
  margin-bottom: 8px;
`;

export const StyledText = styled("p")`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;

export const StyledIconButton = styled("button")`
  border: none;
  background: none;
  position: absolute;
  outline: none;
  top: 14px;
  right: 14px;
  &:focus-visible {
    outline: none;
  }
`;

export const TextWrapper = styled("div")`
  width: 270px;
  height: 40px;
  overflow: hidden;
  margin-bottom: 28px;
`;
