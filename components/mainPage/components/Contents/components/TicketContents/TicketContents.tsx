import React, { useState } from "react";
import ContentsWrapper from "../ContentsWrapper";
import ContentsTitle from "../ContentsTitle";
import TicketSwiper from "./TicketSwiper";
import TicketTab from "./TicketTab";
import MainCommonButtonWrapper from "../MainCommonButttonWrapper";
import MainCommonButton from "../MainCommonButton";

export default function TicketContents() {
  return (
    <ContentsWrapper>
      <ContentsTitle
        title={"티켓 랭킹"}
        subTitle={"오늘 뭐볼까? 지금 HOT한 공연"}
        role={"TourContents"}
      />
      <TicketTab />
      <TicketSwiper />
      <MainCommonButtonWrapper>
        <MainCommonButton>티켓 홈 바로가기</MainCommonButton>
      </MainCommonButtonWrapper>
    </ContentsWrapper>
  );
}
