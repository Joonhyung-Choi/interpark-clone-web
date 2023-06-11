import React from "react";
import styled from "styled-components";
import Search from "./Search";

export default function InnerTopLeft() {
  const LOGOIMGURL =
    "https://www.interpark.com/_next/static/media/ci.4836710e.svg";

  return (
    <HeaderInnerLeft>
      <LeftLogoDiv url={LOGOIMGURL} />
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

const LeftLogoDiv = styled.div<{ url: string }>`
  background: url(${(props) => props.url}) no-repeat 50%;
  background-size: 100%;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    width: 151px;
    height: 38px;
    margin: 0 20px 0 0;
  }
  @media screen and (max-width: 1023px) {
    width: 119px;
    height: 30px;
    margin: 0 0 0 20px;
  }
`;
