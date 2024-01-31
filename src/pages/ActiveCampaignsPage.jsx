import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../utils/firebase";
import Loader from "../components/Loader";
import { Toaster } from "react-hot-toast";
import ActiveCampaignCard from "../components/ActiveCampaignCard";

const ActiveCampaignsPage = () => {
  const campaignsRef = collection(database, "campaigns");

  const [allCampaigns, setAllCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getCampaigns() {
    const q = query(campaignsRef, where("status", "==", "Active"));
    const data = await getDocs(q);
    setAllCampaigns(data.docs);
    setLoading(false);
  }
  useEffect(() => {
    getCampaigns();
  }, []);
  return (
    <>
      {loading && <Loader />}
      <Toaster />
      <div className="p-5 h-[100dvh] overflow-scroll">
        <div className="text-xl font-bold mb-4">Active campaigns</div>
        {allCampaigns == "" && (
          <div className="text-xl font-bold text-gray-500 grid place-items-center h-[80vh] rounded-lg text-center">
            No active campaign found
          </div>
        )}
        <div className="grid grid-cols-3 gap-4">
          {allCampaigns.map((item, index) => {
              return <ActiveCampaignCard data={item.data()} id={item.id} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ActiveCampaignsPage;
