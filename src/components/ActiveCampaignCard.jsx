import React from "react";
import { Link } from "react-router-dom";

const ActiveCampaignCard = ({ data }) => {
  console.log(data);
  return (
    <Link to="">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform">
        <img
          src={data.campaignImage[0]}
          className="h-[260px] object-cover w-full"
          alt=""
        />
        <div className="p-4 space-y-3">
          <div className="">{data.campaignTitle}</div>
          <div className="w-full bg-gray-200 h-1">
            <div className="w-40 h-1 primary"></div>
          </div>
          <div className="flex items-center">
            <div>
              <div className="font-semibold text-xl">₹ 120000</div>
              <div className="text-sm text-gray-500">funded of ₹ 123000</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ActiveCampaignCard;
