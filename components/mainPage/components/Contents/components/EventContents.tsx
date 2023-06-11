import React from "react";
import styled from "styled-components";
import EventSwiper from "./EventSwiper";
import EventTitle from "./EventTitle";
export default function EventContents() {
  return (
    <Wrapper>
      <EventTitle></EventTitle>
      <EventSwiper></EventSwiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 30px 0 60px 0;
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
  }
  @media screen and (max-width: 1023px) {
    padding: 30px 0 20px 0;
    width: 760px;
    border-bottom: 8px solid #f0f4f4;
  }
`;
