import React, { useState } from "react";
import styled from "styled-components";
import ContentsWrapper from "../ContentsWrapper";
import ContentsTitle from "../ContentsTitle";
import TabWrapper from "../TabWrapper";
import TabButton from "../TabButton";
import ShoppingSwiper from "./ShoppingSwiper";

export default function ShoppingContents() {
  const TabList: string[] = [
    "쎈딜",
    "베스트",
    "디지털가전특가",
    "최저가도전",
    "소답상회",
  ];

  const [tabState, setTabState] = useState<string>("쎈딜");
  const getTabState = (newTabState: string) => {
    setTabState(newTabState);
  };

  return (
    <ContentsWrapper>
      <ContentsTitle
        title={"쇼핑 추천"}
        subTitle={"할인이 쎼다! 지금, 특가 상품을 확인하세요."}
        role={"ShopingContents"}
      />
      <TabWrapper>
        {TabList.map((item, index) => (
          <TabButton
            key={index}
            isLastButton={TabList.length === index + 1 ? true : false}
            tabState={tabState}
            getTabState={getTabState}
          >
            {item}
          </TabButton>
        ))}
      </TabWrapper>
      <ShoppingSwiper></ShoppingSwiper>
    </ContentsWrapper>
  );
}
