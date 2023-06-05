import React from "react";
import styled from "styled-components";
import Search from "./Search";

export default function InnerTopRight() {
  return (
    <HeaderIneerRight>
      <RightUl>
        <RightLi isFirstElemnet={true}>
          <RightA>로그인</RightA>
        </RightLi>
        <RightLi isFirstElemnet={false}>
          <RightA>회원가입</RightA>
        </RightLi>
        <RightLi isFirstElemnet={false}>
          <RightMypageButton>마이페이지</RightMypageButton>
        </RightLi>
      </RightUl>
    </HeaderIneerRight>
  );
}
const HeaderIneerRight = styled.div`
  width: 210.59px;
  height: 100%;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const RightUl = styled.ul`
  display: flex;
`;

const RightLi = styled.li<{ isFirstElemnet: boolean }>`
  position: relative;
  font-size: 15px;
  color: #111;
  font-weight: 500;
  margin-left: ${(props) => (props.isFirstElemnet === true ? "" : "20px")};
  height: 50px;
  display: flex;
  align-items: center;
`;

const RightA = styled.a``;

const RightMypageButton = styled.button`
  background: none;
  padding: 0;
  border: none;
  ::after {
    content: "";
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 0.8rem;
    height: 0.4rem;
    background: url(https://www.interpark.com/_next/static/media/icon_arrow.19e52c97.svg)
      no-repeat 50%;
  }
`;
