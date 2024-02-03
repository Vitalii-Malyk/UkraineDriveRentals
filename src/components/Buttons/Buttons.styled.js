import styled from "styled-components";

export const LoadMoreBtn = styled.button`
  display: block;
  border: none;
  width: 200px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: var(--color-brand);
  color: var(--color-wight);
  border-radius: 12px;
  margin: 50px auto;

  font-family: var(--family);
  font-size: var(--fs-sm);
  font-weight: var(--fw-semi-bold);
  line-height: 1.42; /* 142.857% */

  cursor: pointer;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: var(--color-accent);
  }
`;
