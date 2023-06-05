import React from "react";
import styled from "styled-components";
import Search from "./Search";
import InnerTopLeft from "./InnerTopLeft";
import InnerTopRight from "./InnerTopRight";

export default function HeaderInnerTop() {
  return (
    <Wrapper>
      <InnerTopLeft></InnerTopLeft>
      <InnerTopRight></InnerTopRight>
      <MobileMypageButton></MobileMypageButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const MobileMypageButton = styled.button`
  @media screen and (min-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 1023px) {
    display: block;
  }
  border: none;
  width: 34px;
  height: 34px;
  margin-right: 10px;
  cursor: pointer;
  background: url(https://www.interpark.com/_next/static/media/icon_mypage.844580b4.svg)
    no-repeat 50%;
`;
