import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper";
import NavigationButton from "../NavigationButton";
import Image from "next/image";
import tourData from "../../../../../../data/tourData.json";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

export default function TourSwiper() {
  return (
    <Wrapper>
      <NavigationButton className="tour-swiper-button-prev" />
      <NavigationButton className="tour-swiper-button-next" />
      <SwiperWrapper>
        <StyledSwiperPc
          modules={[Navigation]}
          navigation={{
            prevEl: ".tour-swiper-button-prev",
            nextEl: ".tour-swiper-button-next",
            disabledClass: "swiper-button-disabled",
          }}
          breakpoints={{
            1024: {
              slidesPerGroup: 2,
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1280: {
              slidesPerGroup: 3,
              slidesPerView: 3,
              spaceBetween: 26,
            },
          }}
        >
          {tourData.map((item, index) => (
            <StyledSwiperSlide key={index}>
              <SwiperA>
                <ProductImageDiv>
                  <StyledImage
                    src={item.src}
                    layout={"fill"}
                    alt="item"
                  ></StyledImage>
                </ProductImageDiv>
                <ProductExplanationDiv>
                  <TourItemBadgeDiv>1등특가</TourItemBadgeDiv>
                  <ProductEventDiv>{item.explanation.event}</ProductEventDiv>
                  <ProductNametDiv>
                    {item.explanation.productName}
                  </ProductNametDiv>
                  <ProductPriceDiv>
                    {item.explanation.price}
                    <ProductPriceAfterP>원~</ProductPriceAfterP>
                  </ProductPriceDiv>
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
            prevEl: ".tour-swiper-button-prev",
            nextEl: ".tour-swiper-button-next",
            disabledClass: "swiper-button-disabled",
          }}
        >
          {tourData.map((item, index) => (
            <StyledSwiperSlide key={index}>
              <SwiperA>
                <ProductImageDiv>
                  <StyledImage
                    src={item.src}
                    width={230}
                    height={138}
                    alt="item"
                  ></StyledImage>
                </ProductImageDiv>
                <ProductExplanationDiv>
                  <TourItemBadgeDiv>1등특가</TourItemBadgeDiv>
                  <ProductEventDiv>{item.explanation.event}</ProductEventDiv>
                  <ProductNametDiv>
                    {item.explanation.productName}
                  </ProductNametDiv>
                  <ProductPriceDiv>
                    {item.explanation.price}
                    <ProductPriceAfterP>원~</ProductPriceAfterP>
                  </ProductPriceDiv>
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
    height: 354.7px;
  }
  @media screen and (max-width: 1279px) and (min-width: 1024px) {
    height: 354.7px;
  }
  @media screen and (max-width: 1023px) {
    width: 230px;
    height: 219.5px;
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
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

const ProductImageDiv = styled.div`
  position: relative;
  width: 100%;
  height: 244px;
  @media screen and (max-width: 1023px) {
    width: 100%;
    height: 138px;
  }
`;

const ProductExplanationDiv = styled.div`
  position: relative;
  padding: 20px;
  height: 110.7px;
  width: 100%;
  padding: 23px 20px 18px;

  @media screen and (max-width: 1023px) {
    padding: 16px 12px 12px 12px;
    width: 230px;
    height: 81px;
  }
`;

const TourItemBadgeDiv = styled.div`
  position: absolute;
  line-height: 32px;
  height: 32px;
  padding: 0 12px;
  left: 20px;
  top: -16px;
  background-color: #1769ff;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  @media screen and (max-width: 1023px) {
    left: 10px;
    top: -11px;
    height: 22px;
    line-height: 22px;
    padding: 0 7px;
    border-radius: 4px;
    font-size: 10px;
  }
`;

const ProductEventDiv = styled.div`
  width: 100%;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #1769ff;
  font-size: 15px;
  @media screen and (max-width: 1023px) {
    height: 15.5px;
    font-size: 13px;
  }
`;
const ProductNametDiv = styled.div`
  width: 100%;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
  font-size: 15px;
  margin: 4px 0;
  @media screen and (max-width: 1023px) {
    height: 15.5px;
    font-size: 13px;
  }
`;

const ProductPriceDiv = styled.div`
  display: flex;
  width: 100%;
  height: 25.703px;
  line-height: 24px;
  color: #111;
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 1023px) {
    height: 18px;
    font-size: 14px;
  }
`;

const ProductPriceAfterP = styled.p`
  margin-top: 2px;
  display: block;
  font-size: 16px;
  font-weight: 400;
  @media screen and (max-width: 1023px) {
    margin: 0;
    height: 18px;
    font-size: 14px;
  }
`;
