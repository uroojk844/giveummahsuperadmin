import React from "react";
import FeedBackCard from "../components/FeedBackCard"
const FeedbackPage = () => {
  return (
    <div className="p-5">
          <div className="text-xl font-bold">All Feedbacks</div>
          <div className="flex gap-4 py-4">
              <div className="border border-blue-600 cursor-pointer px-5 py-2 rounded-full text-sm hover:text-white hover:bg-blue-600">All</div>
              <div className="border border-blue-600 cursor-pointer px-5 py-2 rounded-full text-sm hover:text-white hover:bg-blue-600">Unread</div>
              <div className="border border-blue-600 cursor-pointer px-5 py-2 rounded-full text-sm hover:text-white hover:bg-blue-600">Read</div>
          </div>
          <div className="shadow-md bg-white rounded-lg overflow-hidden">
              {
                  "bsafweferwfwncdefg".split('').map((item,index)=> {
                      return (<FeedBackCard index={index} />)
                  })
              }
          </div>
    </div>
  );
};

export default FeedbackPage;
