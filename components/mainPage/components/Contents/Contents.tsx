import React from "react";
import styled from "styled-components";
import EventContents from "./components/EventContents/EventContents";
import ShopingContents from "./components/ShopingContents/ShopingContents";
export default function Contents() {
  return (
    <Wrapper>
      <EventContents />
      <ShopingContents />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
