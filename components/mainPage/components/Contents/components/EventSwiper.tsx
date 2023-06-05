import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import Image from "next/image";

export default function EventSwiper() {
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

  const swiperOptions = {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },
  };

  return (
    <StyledSwiper>
      {/* <StyledSwiper {...swiperOptions}></StyledSwiper> */}
      {swiperImg.map((item, index) => (
        <StyledSwiperSlide key={index}>
          <SwiperA>
            <Image
              src={item.src}
              width={500}
              height={274.92}
              alt={item.alt}
            ></Image>
          </SwiperA>
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
}

const StyledSwiper = styled(Swiper)`
  height: 100px;
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    width: 1024px;
  }
  @media screen and (max-width: 1023px) {
    width: 760px;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: 500px;
  border-radius: 14px;
  overflow: hidden;
`;

const SwiperA = styled.a``;
