import React, { useState } from "react";
import styled from "styled-components";
import TabWrapper from "../TabWrapper";
import TabButton from "../TabButton";
import shoppingTabList from "../../../../../../data/shoppingTabList.json";

export default function ShoppingTab() {
  const [tabState, setTabState] = useState<string>("쎈딜");
  const getTabState = (newTabState: string) => {
    setTabState(newTabState);
  };

  return (
    <TabWrapper>
      {shoppingTabList.map((item, index) => (
        <TabButton
          key={index}
          isLastButton={shoppingTabList.length === index + 1 ? true : false}
          tabState={tabState}
          getTabState={getTabState}
        >
          {item}
        </TabButton>
      ))}
    </TabWrapper>
  );
}
