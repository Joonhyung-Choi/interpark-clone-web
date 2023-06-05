import React from "react";
import styled from "styled-components";
import ContentsMain from "./components/EventContents";

export default function Contents() {
  return (
    <Wrapper>
      <ContentsMain></ContentsMain>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
