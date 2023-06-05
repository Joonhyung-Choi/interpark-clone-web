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
              <Image src={item.src} width={30} height={30} alt="" />
              <NavP>{item.text}</NavP>
              <NavBadgeImage
                src={
                  "https://www.interpark.com/_next/static/media/badge_hot.65abbe70.svg"
                }
                width={23}
                height={16}
                alt=""
                isBadgeElement={index === 5 ? true : false}
              ></NavBadgeImage>
            </NavA>
          </NavLi>
        ))}
      </NavUl>
    </BottomNav>
  );
}

const BottomNav = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const NavUl = styled.ul`
  display: fl;
`;

const NavLi = styled.li<{ isFirstElement: boolean }>`
  height: 30px;
  margin-left: ${(props) => (props.isFirstElement === true ? "" : "22px")};
`;

const NavA = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const NavP = styled.p`
  margin: 0 0 0 6px;
  font-size: 16px;
`;

const NavBadgeImage = styled(Image)<{ isBadgeElement: boolean }>`
  display: ${(props) => (props.isBadgeElement === true ? "" : "none")};
  margin: 4px;
`;
