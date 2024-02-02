import styled from "styled-components";
import Select from "react-select";

export const StyledCustomSelect = styled(Select)`
  border-radius: 14px;
  padding: 14px 89px 14px 18px;
  width: 224px;
  height: 48px;
  background: #f7f7fb;
  border: none;

  .react-select__control {
    border-radius: 14px;
    padding: 14px 89px 14px 18px;
    width: 224px;
    height: 48px;
    background: #f7f7fb;
    border: none;
  }

  .react-select__menu {
    border-radius: 20px;
    padding: 14px 89px 14px 18px;
    width: 224px;
    color: green;
    height: 48px;
    background: #f7f7fb;
    border: none;
  }

  .react-select__option {
  }
`;
