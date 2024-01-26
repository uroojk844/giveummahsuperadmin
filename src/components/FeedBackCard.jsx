import React from "react";
import { Link } from "react-router-dom";

const FeedBackCard = ({index}) => {
  return (
    <Link to={`/feedback/${index}`}>
      <div className="cursor-pointer flex gap-4 p-4 border-b text-sm hover:bg-gray-100">
        <div className="text-gray-500">12 Jan 2024</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias
          facere, quasi voluptatem deleniti sed{" "}
        </div>
      </div>
    </Link>
  );
};

export default FeedBackCard;
