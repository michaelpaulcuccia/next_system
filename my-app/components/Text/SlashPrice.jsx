import React from "react";
import styled from "styled-components";

const Root = styled.s`
  color: #999999;
`;

export default function SlashPrice({ price, addOn }) {
  return <Root>${price + addOn}</Root>;
}
