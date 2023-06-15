import React from "react";
import styled from "styled-components";

type TitlePropsTypes = {
  title: string;
  subTitle: string;
  role: string;
};

export default function ContentsTitle({
  title,
  subTitle,
  role,
}: TitlePropsTypes) {
  return (
    <TitleWrapper role={role}>
      <TitleH2>{title}</TitleH2>
      <SubtitleP>{subTitle}</SubtitleP>
    </TitleWrapper>
  );
}

// 여기도 뷰포트 크기 따라서 크기가 달라지니까 반응형 작업 더 해야 함

const TitleWrapper = styled.div<{ role: string }>`
  display: ${(props) => (props.role === "EventContents" ? "none" : "block")};
  position: relative;
  justify-content: center;
  padding: 0 20px;
  @media screen and (max-width: 1280px) {
    width: 1280px;
    height: 59px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    width: 1024px;
    height: 59px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1023px) {
    display: block;
    width: 760px;
    height: 44px;
    margin-bottom: 12px;
    /* display: flex; */
  }
`;

const TitleH2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 700;
  @media screen and (min-width: 1024px) {
    height: 33px;
    font-size: 28px;
  }
  @media screen and (max-width: 1023px) {
    height: 24px;
    font-size: 20px;
  }
`;

const SubtitleP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  width: 100%;
  color: hsla(0, 0%, 7%, 0.5);
  @media screen and (min-width: 1024px) {
    height: 24px;
    font-size: 18px;
  }
  @media screen and (max-width: 1023px) {
    height: 18px;
    font-size: 15px;
  }
`;
