import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <Link to={`/Apps/${id}`}>
      <div className="card bg-base-100 shadow-lg hover:scale-105 transition ease-in-out">
        <figure className="px-10 pt-10">
          <img src={image} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions flex justify-between items-center lg:gap-30">
            <button className="btn p-1.5 text-[#00d390]">
              <Download />
              {downloads}
            </button>
            <button className="btn p-1.5 text-[#ff8811] bg-[#fff0e1]">
              <Star />
              {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
