import React from "react";
import styled from "styled-components";
import EventContents from "./components/MainContents/MainContents";
import ShopingContents from "./components/ShoppingContents/ShoppingContents";
import TourContents from "./components/TourContents/TourContents";

export default function Contents() {
  return (
    <Wrapper>
      <EventContents />
      <ShopingContents />
      <TourContents />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
