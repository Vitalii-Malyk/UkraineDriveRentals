import React, { useState } from "react";
import priceOptions from "../../helpers/functions/priceOptions";

import {
  ButtonStyled,
  Div,
  Divider,
  Form,
  InputStyledOne,
  InputStyledTwo,
  InputWrapper,
  Label,
  SelectBrandStyled,
  SelectPriceStyled,
  Span,
} from "./CatalogForm.styled";

const CatalogForm = () => {
  const [brands] = useState([]);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [inputValueOne, setInputValueOne] = useState("");
  const [inputValueTwo, setInputValueTwo] = useState("");
  const [isValidOne, setIsValidOne] = useState(true);
  const [isValidTwo, setIsValidTwo] = useState(true);

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleInputChangeOne = (event) => {
    const numericValue = event.target.value.replace(/[^\d]/g, "");
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (numericValue >= 0 && numericValue <= 1000000) {
      setInputValueOne(formattedValue);
      setIsValidOne(true);
    } else {
      setIsValidOne(false);
    }
  };

  const handleInputChangeTwo = (event) => {
    const numericValue = event.target.value.replace(/[^\d]/g, "");
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (numericValue >= 0 && numericValue <= 1000000) {
      setInputValueTwo(formattedValue);
      setIsValidTwo(true);
    } else {
      setIsValidTwo(false);
    }
  };

  return (
    <Form>
      <div>
        <Label>
          Car brand
          <SelectBrandStyled value={brand} onChange={handleBrandChange}>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </SelectBrandStyled>
        </Label>
      </div>
      <div>
        <Label>
          Price/ 1 hour
          <SelectPriceStyled
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            {priceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </SelectPriceStyled>
        </Label>
      </div>

      <div>
        <Label>
          Сar mileage / km
          <InputWrapper>
            <Div>
              <Span>From</Span>
              <InputStyledOne
                type="text"
                value={inputValueOne}
                onChange={handleInputChangeOne}
              />
              {!isValidOne && (
                <div style={{ color: "red" }}>
                  Enter a value less than 1 mil.
                </div>
              )}
            </Div>
            <Divider></Divider>
            <Div>
              <Span>To</Span>
              <InputStyledTwo
                type="text"
                value={inputValueTwo}
                onChange={handleInputChangeTwo}
              />
              {!isValidTwo && (
                <div style={{ color: "red" }}>
                  Enter a value less than 1 mil.
                </div>
              )}
            </Div>
          </InputWrapper>
        </Label>
      </div>
      <ButtonStyled type="submit">Search</ButtonStyled>
    </Form>
  );
};

export default CatalogForm;
