import { useEffect } from "react";
import { getAdvertById } from "../../services/Api";

const CardAboutCars = ({ id, make }) => {
  useEffect(() => {
    getAdvertById(id);
  });
  return (
    <div>
      <h1>{make}</h1>
    </div>
  );
};

export default CardAboutCars;
