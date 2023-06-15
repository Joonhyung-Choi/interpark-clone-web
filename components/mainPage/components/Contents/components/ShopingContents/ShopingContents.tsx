import React from "react";
import styled from "styled-components";
import ContentsWrapper from "../ContentsWrapper";
import ContentsTitle from "../ContentsTitle";
export default function ShopingContents() {
  return (
    <ContentsWrapper>
      <ContentsTitle
        title={"쇼핑 추천"}
        subTitle={"할인이 쎼다! 지금, 특가 상품을 확인하세요."}
        role={"ShopingContents"}
      />
    </ContentsWrapper>
  );
}
