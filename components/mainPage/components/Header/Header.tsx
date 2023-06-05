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
  border-bottom: 1px solid black;
  width: 100%;
  @media screen and (min-width: 1024px) {
    height: 160px;
  }
  @media screen and (max-width: 1023px) {
    height: 174px;
  }
  @media screen and (max-width: 767px) {
    height: 174px;
  }
`;

const InnerWrapper = styled.div`
  border: 1px solid red;
  @media screen and (min-width: 1024px) {
    width: 1024px;
    height: 100%;
    padding-top: 30px;
  }
  @media screen and (max-width: 1023px) {
    width: 760px;
    height: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;
