import React, { ReactNode } from "react";
import styled from "styled-components";

export default function TabWrapper({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;

  justify-content: center;
  width: 100%;
  @media screen and (min-width: 1024px) {
    height: 67px;
  }
  @media screen and (max-width: 1023px) {
    height: 49px;
  }
`;
