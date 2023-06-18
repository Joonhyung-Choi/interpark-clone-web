import React, { useState } from "react";
import ContentsWrapper from "../ContentsWrapper";
import ContentsTitle from "../ContentsTitle";
import ShoppingSwiper from "./ShoppingSwiper";
import ShoppingTab from "./ShopingTab";
import MainCommonButtonWrapper from "../MainCommonButttonWrapper";
import MainCommonButton from "../MainCommonButton";

export default function ShoppingContents() {
  return (
    <ContentsWrapper>
      <ContentsTitle
        title={"쇼핑 추천"}
        subTitle={"할인이 쎼다! 지금, 특가 상품을 확인하세요."}
        role={"ShopingContents"}
      />
      <ShoppingTab />
      <ShoppingSwiper />
      <MainCommonButtonWrapper>
        <MainCommonButton>쇼핑 홈 바로가기</MainCommonButton>
      </MainCommonButtonWrapper>
    </ContentsWrapper>
  );
}
