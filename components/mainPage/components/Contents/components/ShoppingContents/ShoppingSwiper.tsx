import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Grid } from "swiper";
import NavigationButton from "../NavigationButton";
import Image from "next/image";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ShoppingSwiper() {
  const swiperImg: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Wrapper>
      <NavigationButton className="shopping-swiper-button-prev" />
      <NavigationButton className="shopping-swiper-button-next" />
      <SwiperWrapper>
        <StyledSwiperPc
          modules={[Navigation, Pagination]}
          slidesPerView={"auto"}
          slidesPerGroup={3}
          navigation={{
            prevEl: ".shopping-swiper-button-prev",
            nextEl: ".shopping-swiper-button-next",
            disabledClass: "swiper-button-disabled",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          }}
          spaceBetween={32}
        >
          {swiperImg.map((item, index) => (
            <StyledSwiperSlide key={index}>{item}</StyledSwiperSlide>
          ))}
        </StyledSwiperPc>
        <StyledSwiperMobile
          modules={[Navigation, Pagination, Grid]}
          slidesPerView={"auto"}
          slidesPerGroup={3}
          spaceBetween={10}
          grid={{
            rows: 2,
          }}
          navigation={{
            prevEl: ".shopping-swiper-button-prev",
            nextEl: ".shopping-swiper-button-next",
            disabledClass: "swiper-button-disabled",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          }}
        >
          {swiperImg.map((item, index) => (
            <StyledSwiperSlide key={index}>{item}</StyledSwiperSlide>
          ))}
        </StyledSwiperMobile>
        <PaginationDiv className="custom-pagination"></PaginationDiv>
      </SwiperWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin: auto;

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    width: 1024px;
  }
  @media screen and (max-width: 1023px) {
    width: 760px;
    height: 460px;
  }
  overflow: visible;

  .swiper-button-disabled {
    visibility: hidden;
  }
`;

const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1023px) {
    height: 202.34;
  }
`;

const StyledSwiperPc = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const StyledSwiperMobile = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 12px;

  @media screen and (min-width: 1280px) {
    width: 300.5px;
    height: 406.5px;
  }
  @media screen and (max-width: 1279px) and (min-width: 1024px) {
    width: 320px;
    height: 426px;
  }
  @media screen and (max-width: 1023px) {
    width: 150px;
    height: 225px;
  }
`;

const SwiperA = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledImage = styled(Image)`
  border-radius: 14px;
`;

const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 7px;
  margin-top: 9px;
  .swiper-pagination-bullet {
    background-color: black;
    width: 7px;
    height: 7px;
    margin: 0 4px;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
