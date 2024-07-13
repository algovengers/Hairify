import { HeaderButton } from "@/components/header";
import React from "react";

const DashboardActionButton = () => {
  return (
    <div className="text-right border border-black px-3 py-0">
      <HeaderButton text="Chatbot" url="/chat" />{" "}
      <HeaderButton text="Generate Report" url="/report" />
    </div>
  );
};

export default DashboardActionButton;
