import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import NavigationButton from "../NavigationButton";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MainSwiper() {
  const swiperImg: { src: string; alt: string }[] = [
    {
      src: "https://openimage.interpark.com/dia/images/28/10/230531010/89a0ac18e539475e830daca908a8f501.jpg",
      alt: "2023 SUKSO SWAG",
    },
    {
      src: "https://openimage.interpark.com/dia/images/144/9/230517009/9ae2cdd301f747bc930254f620c76395.jpg",
      alt: "얼리버드 썸머 '장마준비편' ",
    },
    {
      src: "https://openimage.interpark.com/dia/images/452/1/230525001/b46ea30f69064dab94b96b8714561bc4.jpg",
      alt: "맛있게 먹고 해외여행 도전!",
    },
    {
      src: "https://openimage.interpark.com/dia/images/90/9/230523009/889388efedcd461b8099eaf5fa95908e.jpg",
      alt: "숙박세일 페스타_전국편",
    },
    {
      src: "https://openimage.interpark.com/dia/images/29/6/230405006/53bf78168be64a189930a79450bb133c.jpg",
      alt: "80일간의 세계일주",
    },
    {
      src: "https://openimage.interpark.com/dia/images/368/1/230601001/8a837b27c7b34a13a4d9c7c697774afe.png",
      alt: "진에어는 크다. 인터파 크다. (티저)",
    },
  ];

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
          {swiperImg.map((item, index) => (
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