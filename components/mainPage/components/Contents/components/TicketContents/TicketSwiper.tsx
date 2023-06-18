import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper";
import NavigationButton from "../NavigationButton";
import Image from "next/image";
import ticketData from "../../../../../../data/ticketData.json";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

export default function TicketSwiper() {
  return (
    <Wrapper>
      <NavigationButton className="tour-swiper-button-prev" />
      <NavigationButton className="tour-swiper-button-next" />
      <SwiperWrapper>
        <StyledSwiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".tour-swiper-button-prev",
            nextEl: ".tour-swiper-button-next",
            disabledClass: "swiper-button-disabled",
          }}
          slidesPerView={"auto"}
          spaceBetween={10}
          breakpoints={{
            1024: {
              slidesPerGroup: 3,
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1280: {
              slidesPerGroup: 4,
              slidesPerView: 4,
              spaceBetween: 26,
            },
          }}
        >
          {ticketData.map((item, index) => (
            <StyledSwiperSlide key={index}>
              <SwiperA>
                <ProductImageDiv rank={index + 1}>
                  <StyledImage
                    src={item.src}
                    fill={true}
                    alt="item"
                  ></StyledImage>
                </ProductImageDiv>
                <ProductExplanationDiv>
                  <ProductNameDiv>
                    {item.explanation.productName}
                  </ProductNameDiv>
                  <ProductPlaceDiv>
                    {item.explanation.productPlace}
                  </ProductPlaceDiv>
                  <ProductDurationDiv>
                    {item.explanation.productDuration.startDate +
                      " - " +
                      item.explanation.productDuration.endDate}
                  </ProductDurationDiv>
                  <ProductBadgeDiv badge={item.explanation.badge}>
                    {item.explanation.badge}
                  </ProductBadgeDiv>
                </ProductExplanationDiv>
              </SwiperA>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
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
    height: 316px;
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
    height: 100%;
    margin-bottom: 5px;
  }
`;

const StyledSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  border-radius: 12px;
  width: 100%;
  @media screen and (min-width: 1280px) {
    height: 556px;
  }
  @media screen and (max-width: 1279px) and (min-width: 1024px) {
    height: 556px;
  }
  @media screen and (max-width: 1023px) {
    width: 150px;
    height: 316px;
  }
`;

const SwiperA = styled.a`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  border-radius: 12px;
`;

const ProductImageDiv = styled.div<{ rank: number }>`
  position: relative;
  width: 100%;
  height: 400px;

  @media screen and (max-width: 1023px) {
    width: 100%;
    height: 200px;
  }
  ::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04)),
      linear-gradient(180deg, transparent 68.5%, rgba(0, 0, 0, 0.6));
    z-index: 1;
  }
  ::after {
    content: "${(props) => props.rank}";
    z-index: 3;
    position: absolute;
    left: 22px;
    bottom: 14px;
    font-size: 70px;
    line-height: 83.5px;
    color: #fff;
    font-weight: 700;
    @media screen and (max-width: 1023px) {
      position: absolute;
      left: 12px;
      bottom: 7px;
      font-size: 38px;
      line-height: 45px;
    }
  }
`;

const ProductExplanationDiv = styled.div`
  position: relative;
  padding: 20px;
  height: 156px;
  width: 100%;
  padding: 16px 8px;
  @media screen and (max-width: 1023px) {
    padding: 10px 4px;
    width: 230px;
    height: 81px;
  }
`;

const ProductNameDiv = styled.div`
  width: 100%;
  line-height: 22px;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media screen and (max-width: 1023px) {
    width: 150px;
    line-height: 18px;
    font-size: 15px;
  }
`;

const ProductPlaceDiv = styled.div`
  margin: 7px 0;
  width: 100%;
  height: 18px;
  line-height: 18px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
  @media screen and (max-width: 1023px) {
    width: 150px;
    line-height: 16px;
    font-size: 13px;
  }
`;

const ProductDurationDiv = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;
  height: 17px;
  line-height: 17px;
  color: #999;
  @media screen and (max-width: 1023px) {
    width: 150px;
    height: 14px;
    font-size: 12px;
  }
`;

const ProductBadgeDiv = styled.div<{ badge: string }>`
  display: ${(props) => (props.badge === "" ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  margin: 7px 0 0;
  height: 24px;
  width: auto;
  padding: 0 8px;
  font-size: 11px;
  border: 0.1rem solid rgba(74, 149, 255, 0.3);
  border-radius: 3px;
  color: ${(props) => {
    switch (props.badge) {
      case "좌석우위":
        return "#4a95ff";
      case "단독판매":
        return "#ef3e43";
      default:
        return "initial";
    }
  }};
  width: 57px;
  @media screen and (max-width: 1023px) {
    padding: 0 5px;
    width: 47px;
    height: 15px;
    font-size: 10px;
  }
`;
