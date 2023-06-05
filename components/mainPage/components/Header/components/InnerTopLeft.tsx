import React from "react";
import styled from "styled-components";
import Search from "./Search";

export default function InnerTopLeft() {
  return (
    <HeaderInnerLeft>
      <LeftLogoDiv />
      <Search role={"pc"}></Search>
    </HeaderInnerLeft>
  );
}
const HeaderInnerLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  @media screen and (min-width: 1024px) {
    width: 625px;
  }
  @media screen and (max-width: 1023px) {
    width: 151px;
  }
`;

const LeftLogoDiv = styled.div`
  background: url(https://www.interpark.com/_next/static/media/ci_ko.6f0914fd.svg)
    no-repeat 50%;
  background-size: 100%;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    width: 118px;
    height: 32px;
    margin: 0 20px 0 0;
  }
  @media screen and (max-width: 1023px) {
    width: 77px;
    height: 18px;
    margin: 0 0 0 16px;
  }
`;
