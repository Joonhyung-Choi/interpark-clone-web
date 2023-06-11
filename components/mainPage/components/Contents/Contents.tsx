import React from "react";
import styled from "styled-components";
import EvnetContents from "./components/EventContents";

export default function Contents() {
  return (
    <Wrapper>
      <EvnetContents></EvnetContents>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
