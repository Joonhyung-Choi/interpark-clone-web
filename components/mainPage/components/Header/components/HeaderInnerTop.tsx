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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;

  @media screen and (min-width: 1024px) {
  }
  @media screen and (max-width: 1023px) {
  }
  @media screen and (max-width: 767px) {
  }
`;

const HeaderInnerLeft = styled.div`
  display: flex;
  align-items: center;
  width: 625px;
  height: 100%;
`;

const LeftLogoDiv = styled.div`
  background: url(https://www.interpark.com/_next/static/media/ci.4836710e.svg)
    no-repeat 50%;
  background-size: 100%;
  cursor: pointer;
  width: 151px;
  height: 38px;
  margin: 0 20px 0 0;
`;

const LeftSearchDiv = styled.div`
  display: flex;
  width: 454px;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 24px;
`;

const SearchBarButton = styled.input`
  display: block;
  width: 400px;
  height: 48px;
  background-color: beige;
  border: none;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  cursor: pointer;
`;
const SearchIconButton = styled.button`
  width: 52px;
  height: 48px;
  background: url(https://www.interpark.com/_next/static/media/btn_search.6cba72a7.svg)
    no-repeat 50%;
  cursor: pointer;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
`;

const HeaderIneerRight = styled.div`
  width: 210.59px;
  height: 100%;
  background-color: aqua;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
