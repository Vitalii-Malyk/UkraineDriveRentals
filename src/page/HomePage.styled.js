import styled from "styled-components";
import bgImage from "../helpers/image/bgimg.jpg";

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
  max-width: 600px;
  margin-bottom: 40px;
`;

export const ServiceList = styled("ul")`
  list-style-type: none;
  padding: 0;
`;

export const ServiceItem = styled("li")`
  margin-bottom: 10px;
`;
