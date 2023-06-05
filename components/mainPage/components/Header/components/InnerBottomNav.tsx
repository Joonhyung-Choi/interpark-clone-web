import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function InnerBottomNav() {
  const navItems: { src: string; text: string }[] = [
    {
      src: "https://www.interpark.com/images/header/nav/icon_tour.png",
      text: "투어",
    },
    {
      src: "https://www.interpark.com/images/header/nav/icon_ticket.png",
      text: "티켓",
    },
    {
      src: "https://www.interpark.com/images/header/nav/icon_shopping.png",
      text: "쇼핑",
    },
    {
      src: "https://www.interpark.com/images/header/nav/icon_book.png",
      text: "도서",
    },
    {
      src: "https://www.interpark.com/images/header/nav/icon_triple.png",
      text: "트리플",
    },
    {
      src: "https://www.interpark.com/images/header/nav/icon_special.png",
      text: "1등특가",
    },
  ];
  return (
    <BottomNav>
      <NavUl>
        {navItems.map((item, index) => (
          <NavLi key={index} isFirstElement={index === 0 ? true : false}>
            <NavA>
              <NavImage src={item.src} width={30} height={30} alt="" />
              <MobileNavImage src={item.src} width={48} height={48} alt="" />
              <NavP>{item.text}</NavP>
              <NavBadgeImage
                src={
                  "https://www.interpark.com/_next/static/media/badge_hot.65abbe70.svg"
                }
                width={23}
                height={15}
                alt=""
                isBadgeElement={index === 5 ? true : false}
              ></NavBadgeImage>
            </NavA>
          </NavLi>
        ))}
      </NavUl>
      <EventUl>
        <EventLi>
          <NavA>대한민국숙박세일페스타</NavA>
        </EventLi>
      </EventUl>
    </BottomNav>
  );
}

const BottomNav = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (min-width: 1024px) {
    justify-content: left;
  }
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
  }
`;

const NavUl = styled.ul`
  display: flex;
`;

const NavLi = styled.li<{ isFirstElement: boolean }>`
  @media screen and (min-width: 1024px) {
    height: 30px;
    margin-left: ${(props) => (props.isFirstElement === true ? "" : "22px")};
  }
  @media screen and (max-width: 1023px) {
    height: 68px;
    margin-left: ${(props) => (props.isFirstElement === true ? "" : "18px")};
  }
`;

const NavA = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

const NavP = styled.p`
  @media screen and (min-width: 1024px) {
    margin: 0 0 0 6px;
    font-size: 16px;
  }
  @media screen and (max-width: 1023px) {
    margin: 6px 0 0 0;
    font-size: 12px;
  }
`;

const NavImage = styled(Image)`
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
const MobileNavImage = styled(Image)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
const NavBadgeImage = styled(Image)<{ isBadgeElement: boolean }>`
  display: ${(props) => (props.isBadgeElement === true ? "" : "none")};
  margin: 0 0 0 4px;
  @media screen and (max-width: 1023px) {
    position: absolute;
    top: 33px;
    right: 0;
  }
`;

const EventUl = styled.ul`
  @media screen and (min-width: 1024px) {
    display: flex;
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }

  ::before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 16px;
    margin: 0 12px;
    background-color: #e9e9e9;
  }
`;

const EventLi = styled.li``;
