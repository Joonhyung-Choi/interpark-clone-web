import React from "react";
import styled from "styled-components";
import ContentsWrapper from "../ContentsWrapper";
import EventSwiper from "./EventSwiper";
import ContentsTitle from "../ContentsTitle";

export default function EventContents() {
  return (
    <ContentsWrapper>
      <ContentsTitle
        title={"오늘의 픽"}
        subTitle={"인터파크에서 할인혜택을 꼭 챙기세요."}
        role={"EventContents"}
      />
      <EventSwiper />
    </ContentsWrapper>
  );
}
