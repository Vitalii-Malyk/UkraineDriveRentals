import styled from "styled-components";

export const Form = styled("form")`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
`;

export const Label = styled("label")`
  font-size: 14px;
  line-height: 1.29;
  color: #8a8a89;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SelectBrandStyled = styled("select")`
  border-radius: 14px;
  padding: 14px 89px 14px 18px;
  width: 224px;
  height: 48px;
  background: #f7f7fb;
  border: none;
`;

export const SelectPriceStyled = styled("select")`
  border-radius: 14px;
  padding: 14px 18px;
  width: 125px;
  height: 48px;
  background: #f7f7fb;
  border: none;
`;

export const InputWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

export const InputStyledOne = styled("input")`
  border-radius: 14px 0 0 14px;
  padding-left: 75px;
  width: 160px;
  height: 48px;
  background: #f7f7fb;
  border: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: #121417;
  &:focus-visible {
    outline: none;
  }
`;
export const InputStyledTwo = styled("input")`
  border-radius: 0 14px 14px 0;
  padding-left: 75px;
  width: 160px;
  height: 48px;
  background: #f7f7fb;
  border: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: #121417;

  &:focus-visible {
    outline: none;
  }
`;

export const Divider = styled("div")`
  width: 1px;
  height: 48px;
  background-color: #ccc;
`;

export const Div = styled("div")`
  position: relative;
  height: 48px;
`;

export const Span = styled("span")`
  position: absolute;
  top: 50%;
  padding-left: 24px;
  font-weight: 500;
  text-align: center;
  font-size: 18px;
  line-height: 1.11;
  color: #121417;
  background-color: transparent;
  transform: translateY(-50%);
`;

export const ButtonStyled = styled("button")`
  border-radius: 12px;
  border: none;
  border-color: #3470ff;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  background-color: #3470ff;
  cursor: pointer;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: #fff;
`;
