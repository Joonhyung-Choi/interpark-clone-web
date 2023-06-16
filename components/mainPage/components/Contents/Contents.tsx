import React from "react";
import styled from "styled-components";
import EventContents from "./components/MainContents/MainContents";
import ShopingContents from "./components/ShoppingContents/ShoppingContents";
export default function Contents() {
  return (
    <Wrapper>
      <EventContents />
      <ShopingContents />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
