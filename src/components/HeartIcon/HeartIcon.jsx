import React, { useState } from "react";
import StyledHeartIcon from "./HeartIcon.styled";

const HeartIcon = ({ onClick, isFilled }) => {
  const [filled, setFilled] = useState(isFilled);

  const handleClick = () => {
    setFilled(!filled);
    onClick && onClick(!filled);
  };

  return <StyledHeartIcon onClick={handleClick} isFilled={filled} />;
};

export default HeartIcon;
