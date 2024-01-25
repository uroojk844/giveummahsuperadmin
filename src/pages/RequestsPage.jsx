import React from "react";
import CampaignCard from "../components/CampaignCard";

const RequestsPage = () => {
  let campaigns = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="p-5 h-[100dvh] overflow-scroll">
      <div className="text-xl font-bold mb-4">Campaign creation requests</div>
      <div className="grid grid-cols-3 gap-4">
        {campaigns.map((item, index) => {
            return <CampaignCard index={index} />;
        })}
      </div>
    </div>
  );
};

export default RequestsPage;
