import React, { ReactNode } from "react";
import styled from "styled-components";

export default function MainCommonButton({ children }: { children: string }) {
  return <MainCommonButtonComponent>{children}</MainCommonButtonComponent>;
}

const MainCommonButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin: 20px auto 0;
  padding: 0 39px;
  font-size: 16px;
  line-height: 56px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 38px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  ::after {
    content: "";
    display: inline-block;
    width: 7px;
    height: 11px;
    margin-left: 7px;
    background: url(https://www.interpark.com/_next/static/media/icon_linkArrow.fc64c13a.svg)
      no-repeat 50%;
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    height: 48px;
    padding: 0 20px;
    margin: 12px auto 0;
    border-radius: 0;
    font-size: 15px;
    font-weight: 700;
  }
`;
