import React, { useState, useEffect } from "react";
import axios from "axios";
import priceOptions from "../../helpers/functions/priceOptions";

const CatalogForm = () => {
  const [brands] = useState([]);
  const [brand, setBrand] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");
  const [price, setPrice] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://65babcceb4d53c0665538e25.mockapi.io/cars")
  //     .then((response) => {
  //       console.log(response.data);
  //       // setBrands(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching brands:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://example.com/api/brands")
  //     .then((response) => {
  //       setBrands(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching brands:", error);
  //     });
  // }, []);

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  return (
    <form>
      <div>
        <label>
          Бренд авто:
          <select value={brand} onChange={handleBrandChange}>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Прайс:
          <select value={price} onChange={(e) => setPrice(e.target.value)}>
            {priceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Пробіг авто з:
          <input
            type="text"
            value={mileageFrom}
            onChange={(e) => setMileageFrom(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Пробіг авто по:
          <input
            type="text"
            value={mileageTo}
            onChange={(e) => setMileageTo(e.target.value)}
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CatalogForm;
