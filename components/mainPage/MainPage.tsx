import React from "react";
import Header from "./components/Header/Header";
import Contents from "./components/Contents/Contents";
import Footer from "./components/Footer";
import styled from "styled-components";

export default function MainPage() {
  return (
    <Wrapper>
      <Header></Header>
      <Contents></Contents>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  width: 100%;
`;
