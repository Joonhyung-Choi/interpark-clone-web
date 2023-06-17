import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import NavigationButton from "../NavigationButton";
import Image from "next/image";
import mainData from "../../../../../../data/mainData.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MainSwiper() {
  return (
    <Wrapper>
      <NavigationButton className="main-swiper-button-prev" />
      <NavigationButton className="main-swiper-button-next" />
      <SwiperWrapper>
        <StyledSwiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={2}
          navigation={{
            prevEl: ".main-swiper-button-prev",
            nextEl: ".main-swiper-button-next",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          }}
          loop={true}
          spaceBetween={24}
          autoplay={{
            delay: 3000,
          }}
        >
          {mainData.map((item, index) => (
            <StyledSwiperSlide key={index}>
              <SwiperA>
                <StyledImage
                  src={item.src}
                  layout={"fill"}
                  alt={item.alt}
                ></StyledImage>
              </SwiperA>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
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
  }
  overflow: visible;
`;

const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1023px) {
    height: 202.34;
  }
`;

const StyledSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  @media screen and (min-width: 1280px) {
    width: 628px;
    height: 345.31px;
  }
  @media screen and (max-width: 1279px) and (min-width: 1024px) {
    width: 500px;
    height: 274.92px;
  }
  @media screen and (max-width: 1023px) {
    width: 368px;
    height: 202.34px;
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
