import React from "react";
import styled from "styled-components";
import Search from "./Search";
import InnerBottomNav from "./InnerBottomNav";

export default function HeaderInnerBottom() {
  return (
    <Wrapper>
      <InnerBottomNav></InnerBottomNav>
      <Search role="mobile"></Search>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1024px) {
    height: 80px;
    padding: 30px 0 20px 0;
  }
  @media screen and (max-width: 1023px) {
    align-items: center;
    height: 174px;
    padding: 14px 0 22px 0;
  }
`;
