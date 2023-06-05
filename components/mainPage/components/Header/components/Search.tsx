import React from "react";
import styled from "styled-components";

export default function Search({ role }: { role: "pc" | "mobile" }) {
  return (
    <SearchWrapper role={role}>
      <SearchBarButton></SearchBarButton>
      <SearchIconButton></SearchIconButton>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div<{ role: "pc" | "mobile" }>`
  position: relative;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  @media screen and (min-width: 1024px) {
    width: 454px;
    display: ${(props) => (props.role === "pc" ? "flex" : "none")};
  }
  @media screen and (max-width: 1023px) {
    width: 490px;
    display: ${(props) => (props.role === "mobile" ? "flex" : "none")};
    margin-top: 20px;
  }
`;

const SearchBarButton = styled.input`
  display: block;
  width: 400px;
  height: 48px;
  border: none;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    width: 400px;
  }
  @media screen and (max-width: 1023px) {
    width: 406px;
    margin-left: 16px;
  }
`;
const SearchIconButton = styled.button`
  position: absolute;
  right: 0;
  width: 52px;
  height: 48px;
  background: url(https://www.interpark.com/_next/static/media/btn_search.6cba72a7.svg)
    no-repeat 50%;
  cursor: pointer;
  border: none;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
`;
