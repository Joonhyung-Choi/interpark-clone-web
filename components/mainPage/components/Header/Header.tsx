import React from "react";
import styled from "styled-components";
import HeaderInnerTop from "./components/HeaderInnerTop";
import HeaderInnerBottom from "./components/HeaderInnerBottom";

export default function Header() {
  return (
    <Wrpper>
      <InnerWrapper>
        <HeaderInnerTop></HeaderInnerTop>
        <HeaderInnerBottom></HeaderInnerBottom>
      </InnerWrapper>
    </Wrpper>
  );
}

const Wrpper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 1024px) {
    height: 160px;
  }
  @media screen and (max-width: 1023px) {
    height: 232px;
  }
`;

const InnerWrapper = styled.div`
  height: 100%;
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-top: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    width: 1024px;
    padding-top: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  @media screen and (max-width: 1023px) {
    width: 760px;
    border-bottom: 8px solid #f0f4f4;
  }
`;
