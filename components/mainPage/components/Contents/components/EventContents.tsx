import React from "react";
import styled from "styled-components";
import MainSwiper from "./EventSwiper";

export default function EventContents() {
  return (
    <Wrapper>
      <MainSwiper></MainSwiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 0 60px 0;
  margin: 0 auto;
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
  }
  @media screen and (max-width: 1023px) {
    width: 760px;
    border-bottom: 8px solid #f0f4f4;
  }
`;
