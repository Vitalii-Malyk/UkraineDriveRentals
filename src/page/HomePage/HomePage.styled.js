import styled from "styled-components";
import bgImage from "../../helpers/image/bgimg.jpg";

export const HomeContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
`;
export const Title = styled("h1")`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Description = styled("p")`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const ServiceList = styled("ul")`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 800px;
`;

export const ServiceItem = styled("li")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const ServiceListText = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  margin-top: 20px;
`;
