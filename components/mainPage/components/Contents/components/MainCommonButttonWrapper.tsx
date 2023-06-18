import React, { ReactNode } from "react";
import styled from "styled-components";

export default function MainCommonButtonWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    width: 1024px;
    height: 76px;
  }
  @media screen and (max-width: 1023px) {
    width: 760px;
    height: 48px;
    padding: 0 20px;
  }
`;
