import React from "react";
import styled from "styled-components";
import Search from "./Search";

export default function HeaderInnerBottom() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 1024px) {
    height: 30px;
  }
  @media screen and (max-width: 1023px) {
    height: 138px;
  }
  @media screen and (max-width: 767px) {
  }
`;
