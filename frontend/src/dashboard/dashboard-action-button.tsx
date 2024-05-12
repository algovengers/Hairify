import { HeaderButton } from "@/components/header";
import React from "react";

const DashboardActionButton = () => {
  return (
    <div className="text-right">
      <HeaderButton text="Chatbot" url="/chat" />{" "}
      <HeaderButton text="Generate Report" url="/report" />
    </div>
  );
};

export default DashboardActionButton;
