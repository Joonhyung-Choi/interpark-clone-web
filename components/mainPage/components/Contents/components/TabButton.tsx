import React, { ReactNode } from "react";
import styled from "styled-components";

export default function TabButton({
  children,
  isLastButton,
  tabState,
  getTabState,
}: {
  children: string;
  isLastButton: boolean;
  tabState: string;
  getTabState: (newTabStae: string) => void;
}) {
  return (
    <TabButtonComponent
      isLastButton={isLastButton}
      buttonName={children}
      tabState={tabState}
      onClick={() => {
        getTabState(children);
      }}
    >
      {children}
    </TabButtonComponent>
  );
}

const TabButtonComponent = styled.button<{
  isLastButton: boolean;
  buttonName: string;
  tabState: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  background-color: ${(props) =>
    props.buttonName === props.tabState ? "#333" : "#fff;"};
  color: ${(props) => (props.buttonName === props.tabState ? "#fff;" : "#111")};
  margin-right: ${(props) => (props.isLastButton ? "" : "5px")};
  @media screen and (min-width: 1024px) {
    padding: 0 20px;
    height: 44px;
    border-radius: 24px;
  }
  @media screen and (max-width: 1023px) {
    padding: 0 14px;
    height: 34px;
    border-radius: 17px;
  }
`;
