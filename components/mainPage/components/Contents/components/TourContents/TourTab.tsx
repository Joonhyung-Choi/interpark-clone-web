import React, { useState } from "react";
import TabWrapper from "../TabWrapper";
import TabButton from "../TabButton";
import tourTabList from "../../../../../../data/tourTabList.json";

export default function TourTab() {
  const [tabState, setTabState] = useState<string>("1등특가");
  const getTabState = (newTabState: string) => {
    setTabState(newTabState);
  };

  return (
    <TabWrapper>
      {tourTabList.map((item, index) => (
        <TabButton
          key={index}
          isLastButton={tourTabList.length === index + 1 ? true : false}
          tabState={tabState}
          getTabState={getTabState}
        >
          {item}
        </TabButton>
      ))}
    </TabWrapper>
  );
}
