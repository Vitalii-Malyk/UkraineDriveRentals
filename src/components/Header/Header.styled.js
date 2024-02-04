import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--color-footer-header-wrap);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 100px;
`;

export const Link = styled(NavLink)`
  padding: 15px 0;
  text-decoration: none;
  font-weight: 600;
  font-size: 22px;
  color: var(--color-text-footer-header);

  &:hover,
  &:focus,
  &.active {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #187cb2;
  }
`;
