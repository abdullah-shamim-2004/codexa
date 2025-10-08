import { Download, Star } from "lucide-react";
import React from "react";

const AppCard = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  return (
    <div className="card bg-base-100 shadow-lg hover:scale-105 transition ease-in-out">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
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
  );
};

export default AppCard;
