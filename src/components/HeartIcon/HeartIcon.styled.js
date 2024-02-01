import styled from "styled-components";
import { ReactComponent as HeartSvg } from "../../helpers/image/iconHeart.svg";

const StyledHeartIcon = styled(HeartSvg)`
  width: 24px;
  height: 24px;
  path {
    fill: ${(props) => (props.isFilled ? "#3470ff" : "transparent")};
    transition: fill 0.3s ease;
  }

  path {
    stroke: ${(props) => (props.isFilled ? "#3470ff" : "white")};
  }

  transition: fill 0.3s ease;
  cursor: pointer;
`;

export default StyledHeartIcon;
