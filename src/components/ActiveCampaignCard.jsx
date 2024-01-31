import { collection, doc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { database } from "../utils/firebase";

const ActiveCampaignCard = ({ data, id }) => {
  const ref = collection(database, "donations");
  const [donations, setDonations] = useState([]);
  const [raised, setRaised] = useState(0);
  useEffect(() => {
    async function getData() {
      const q = query(ref, where("campaignId", "==", id));
      const data = await getDocs(q);
      setDonations(data.docs);
      setRaised(data.docs.reduce((c, n) => +c + +n.data().amount, 0));
    }
    getData();
  }, []);
  return (
    <Link to="">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform">
        <img
          src={data.campaignImage[0]}
          className="h-[260px] object-cover w-full"
          alt=""
        />
        {donations.map((item) => console.log(item.data().amount))}
        <div className="p-4 space-y-3">
          <div className="">{data.campaignTitle}</div>
          <div className="w-full bg-gray-200 h-1 overflow-hidden">
            <div
              className="h-1 primary"
              style={{ width: (raised / data.goalAmount) * 100 + "%" }}
            ></div>
          </div>
          <div className="flex items-center">
            <div>
              <div className="font-semibold text-xl">₹ {raised}</div>
              <div className="text-sm text-gray-500">
                funded of ₹ {data.goalAmount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ActiveCampaignCard;
