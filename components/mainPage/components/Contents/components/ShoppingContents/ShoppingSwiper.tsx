import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper";
import NavigationButton from "../NavigationButton";
import Image from "next/image";
import shoppingData from "../../../../../../data/shoppingData.json";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

export default function ShoppingSwiper() {
  return (
    <Wrapper>
      <NavigationButton className="shopping-swiper-button-prev" />
      <NavigationButton className="shopping-swiper-button-next" />
      <SwiperWrapper>
        <StyledSwiperPc
          modules={[Navigation]}
          navigation={{
            prevEl: ".shopping-swiper-button-prev",
            nextEl: ".shopping-swiper-button-next",
            disabledClass: "swiper-button-disabled",
          }}
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
          {shoppingData.map((item, index) => (
            <StyledSwiperSlide key={index}>
              <SwiperA>
                <ProductImageDiv>
                  <StyledImage
                    src={item.src}
                    fill={true}
                    alt="item"
                  ></StyledImage>
                </ProductImageDiv>
                <ProductExplanationDiv>
                  <PriceDiv>
                    <DiscountP>{item.explanation.discount}</DiscountP>
                    <PriceP>{item.explanation.price}</PriceP>원
                  </PriceDiv>
                  <ExplainDiv>{item.explanation.explain}</ExplainDiv>
                </ProductExplanationDiv>
              </SwiperA>
            </StyledSwiperSlide>
          ))}
        </StyledSwiperPc>
        <StyledSwiperMobile
          modules={[Navigation, Grid]}
          slidesPerView={"auto"}
          spaceBetween={10}
          grid={{
            rows: 2,
          }}
          navigation={{
            prevEl: ".shopping-swiper-button-prev",
            nextEl: ".shopping-swiper-button-next",
            disabledClass: "swiper-button-disabled",
          }}
        >
          {shoppingData.map((item, index) => (
            <StyledSwiperSlide key={index}>
              <SwiperA>
                <ProductImageDiv>
                  <StyledImage
                    src={item.src}
                    width={150}
                    height={150}
                    alt="item"
                  ></StyledImage>
                </ProductImageDiv>
                <ProductExplanationDiv>
                  <PriceDiv>
                    <DiscountP>{item.explanation.discount}</DiscountP>
                    <PriceP>{item.explanation.price}원</PriceP>
                  </PriceDiv>
                  <ExplainDiv>{item.explanation.explain}</ExplainDiv>
                </ProductExplanationDiv>
              </SwiperA>
            </StyledSwiperSlide>
          ))}
        </StyledSwiperMobile>
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
  padding: 0 20px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  width: 100%;
  @media screen and (min-width: 1280px) {
    height: 406.5px;
  }
  @media screen and (max-width: 1279px) and (min-width: 1024px) {
    height: 426px;
  }
  @media screen and (max-width: 1023px) {
    width: 150px;
    height: 225px;
  }
  ::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 12px;
  }
`;

const SwiperA = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledImage = styled(Image)`
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

const ProductImageDiv = styled.div`
  position: relative;
  width: 100%;
  @media screen and (min-width: 1280px) {
    height: 300.5px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    height: 320px;
  }
  @media screen and (max-width: 1023) {
    height: 150px;
  }
`;

const ProductExplanationDiv = styled.div`
  position: relative;
  padding: 20px;
  height: 106px;
  width: 100%;
  @media screen and (max-width: 1023px) {
    padding: 10px 12px 12px 12px;
    width: 150px;
    height: 75px;
  }
`;

const PriceDiv = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  font-size: 20px;
  line-height: 24px;
  @media screen and (max-width: 1023px) {
    height: 18px;
    line-height: 18px;
    font-size: 15px;
  }
`;

const DiscountP = styled.p`
  color: #ef3e43;
  display: block;
  margin-right: 2px;
  font-size: 100%;
  line-height: 100%;
  font-weight: 700;
`;
const PriceP = styled.p`
  font-size: 100%;
  line-height: 100%;
  font-weight: 700;
`;

const ExplainDiv = styled.div`
  width: 100%;
  height: 36px;
  margin-top: 6px;
  font-size: 15px;
  line-height: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media screen and (max-width: 1023px) {
    margin-top: 3px;
    height: 32px;
    font-size: 13px;
    line-height: 16px;
  }
`;
