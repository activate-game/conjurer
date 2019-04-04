import * as React from "react";
import styled from "styled-components";
import { assetUrl } from "../utils/assets";

function Card({ children }: React.PropsWithChildren<any>) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  width: 336px;
  padding: 32px;
  border: 20px solid;
  border-image: url("${assetUrl("panel-scroll.png")}") 5 fill;
  border-image-repeat: stretch;
`;

export default Card;
