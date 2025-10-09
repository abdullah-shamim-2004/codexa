import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import DownImg from "../assets/icon-downloads.png";
import RatingImg from "../assets/icon-ratings.png";
import ReviewImg from "../assets/icon-review.png";
import RatingsBarChart from "../Components/renderBarChart";
import { updateList } from "../Utilites/LocalStorage";

const AppDetails = () => {
  const { id } = useParams();
  const { allApps } = useApps();
  const apps = allApps.find((p) => p.id === Number(id));
  // console.log(apps);

  const {
    image,
    title,
    downloads,
    size,
    companyName,
    ratings,
    description,
    ratingAvg,
    reviews,
  } = apps || {};
  const [Install, setInstall] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const handleInstall = () => {
    updateList(apps);
    setInstall(true);
    setDisabled(true);
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h3>
            Develop By: <span>{companyName}</span>
          </h3>
          <div className="flex gap-10">
            <div>
              <img src={DownImg} alt="" />
              <p>Downloads</p>
              <h2 className="text-4xl font-extrabold">{downloads}</h2>
            </div>
            <div>
              <img src={RatingImg} alt="" />
              <p>Average Ratings</p>
              <h2 className="text-4xl font-extrabold">{ratingAvg}</h2>
            </div>
            <div>
              <img src={ReviewImg} alt="" />
              <p>Total Reviews</p>
              <h2 className="text-4xl font-extrabold">{reviews}</h2>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={isDisabled}
            className="btn text-white px-6 py-3.5 w-fit text-2xl font-semibold bg-[#14acbb]"
          >
            {Install ? "Intalled" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl font-semibold ml-12">Ratings</h1>
        <RatingsBarChart ratings={ratings}></RatingsBarChart>
      </div>
      <div>
        <h1 className="text-2xl font-semibold my-3.5">Description:</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
