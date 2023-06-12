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

const TitleWrapper = styled.div<{ role: string }>`
  display: ${(props) => (props.role === "EventContents" ? "none" : "block")};
  position: relative;
  width: 720px;
  height: 44px;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 12px;
  @media screen and (max-width: 1023px) {
    display: block;
    /* display: flex; */
  }
`;

const TitleH2 = styled.h2`
  display: block;
  width: 100%;
  height: 24px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
`;

const SubtitleP = styled.p`
  display: block;
  margin-top: 2px;
  width: 100%;
  height: 18px;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: hsla(0, 0%, 7%, 0.5);
`;
