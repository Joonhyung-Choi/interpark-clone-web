import React, { useState } from "react";
import TabWrapper from "../TabWrapper";
import TabButton from "../TabButton";
import ticketTabList from "../../../../../../data/ticketTabList.json";

export default function TicketTab() {
  const [tabState, setTabState] = useState<string>("뮤지컬");
  const getTabState = (newTabState: string) => {
    setTabState(newTabState);
  };

  return (
    <TabWrapper>
      {ticketTabList.map((item, index) => (
        <TabButton
          key={index}
          isLastButton={ticketTabList.length === index + 1 ? true : false}
          tabState={tabState}
          getTabState={getTabState}
        >
          {item}
        </TabButton>
      ))}
    </TabWrapper>
  );
}
