import React from "react";
import styled from "styled-components";

export default function NavigationButton({ className }: { className: string }) {
  return (
    <NavigationButtonComponent
      className={className}
      buttonRole={className}
    ></NavigationButtonComponent>
  );
}

const NavigationButtonComponent = styled.button<{
  buttonRole: string;
}>`
  z-index: 10;
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-top: -15px;
  width: 48px;
  height: 48px;
  background: hsla(0, 0%, 100%, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  font-size: 0;
  cursor: pointer;
  left: ${(props) =>
    props.buttonRole.split("-").includes("prev") ? "-23px" : ""};
  right: ${(props) =>
    props.buttonRole.split("-").includes("next") ? "-23px" : ""};
  @media screen and (max-width: 1023px) {
    display: none;
  }
  content: "";
  ::after {
    content: "";
    width: 1.8rem;
    height: 2.8rem;
    background: url(https://www.interpark.com/_next/static/media/slider_arrow.d2fa00ea.svg)
      no-repeat 50%;
    transform: ${(props) =>
      props.buttonRole.split("-").includes("prev") ? "rotate(180deg)" : ""};
  }
`;
