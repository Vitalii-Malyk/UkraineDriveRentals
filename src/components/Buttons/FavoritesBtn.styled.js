import styled from "styled-components";

export const FavBtn = styled.button`
  display: block;
  width: 16px;
  height: 16px;
  background: transparent;
  margin-left: auto;
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover,
  :focus {
    border: none;
    outline: none;
  }
`;
export const FavIconActive = styled.svg`
  fill: var(--color-fav-active);
`;
export const FavIconNormal = styled.svg`
  stroke: var(--color-wight);
`;
export const Notification = styled.p`
  font-size: var(--fs-lg);
  font-weight: var(--fw-normal);
  line-height: 24px;
  color: var(--color-black);
  text-align: center;
`;
