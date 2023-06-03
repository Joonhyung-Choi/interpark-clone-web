import React from "react";
import styled from "styled-components";

export default function HeaderInnerTop() {
  return (
    <Wrapper>
      <HeaderInnerLeft>
        <LeftLogoDiv />
        <LeftSearchDiv></LeftSearchDiv>
      </HeaderInnerLeft>
      <HeaderIneerRight></HeaderIneerRight>
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
  background-color: aqua;
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
  width: 454px;
  height: 100%;
`;

const LeftSearchBarButton = styled.input``;
const LeftSearchIconButton = styled.button``;

const HeaderIneerRight = styled.div`
  width: 210.59px;
  height: 100%;
  background-color: aqua;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
