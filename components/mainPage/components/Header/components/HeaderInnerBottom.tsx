import React from "react";
import styled from "styled-components";
import Search from "./Search";
import InnerBottomNav from "./InnerBottomNav";

export default function HeaderInnerBottom() {
  return (
    <Wrapper>
      <InnerBottomNav></InnerBottomNav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 1024px) {
    height: 80px;
    padding: 30px 0 20px 0;
  }
  @media screen and (max-width: 1023px) {
    height: 138px;
  }
  @media screen and (max-width: 767px) {
  }
`;
