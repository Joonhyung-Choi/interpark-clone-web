import React, { useState } from "react";
import ContentsWrapper from "../ContentsWrapper";
import ContentsTitle from "../ContentsTitle";
import TourSwiper from "./TourSwiper";
import TourTab from "./TourTab";
import MainCommonButtonWrapper from "../MainCommonButttonWrapper";
import MainCommonButton from "../MainCommonButton";

export default function TourContents() {
  return (
    <ContentsWrapper>
      <ContentsTitle
        title={"투어 특가"}
        subTitle={"해외여행은 인터파크다"}
        role={"TourContents"}
      />
      <TourTab />
      <TourSwiper />
      <MainCommonButtonWrapper>
        <MainCommonButton>투어 홈 바로가기</MainCommonButton>
      </MainCommonButtonWrapper>
    </ContentsWrapper>
  );
}
