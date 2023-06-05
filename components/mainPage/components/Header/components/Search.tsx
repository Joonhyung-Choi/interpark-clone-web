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
  width: 454px;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  @media screen and (min-width: 1024px) {
    display: ${(props) => (props.role === "pc" ? "flex" : "none")};
  }
  @media screen and (max-width: 1023px) {
    display: ${(props) => (props.role === "mobile" ? "flex" : "none")};
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
`;
const SearchIconButton = styled.button`
  width: 52px;
  height: 48px;
  background: url(https://www.interpark.com/_next/static/media/btn_search.6cba72a7.svg)
    no-repeat 50%;
  cursor: pointer;
  border: none;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
`;
