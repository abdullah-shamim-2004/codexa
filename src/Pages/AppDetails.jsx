import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import DownImg from "../assets/icon-downloads.png";
import RatingsBarChart from "../Components/renderBarChart";
// import renderBarChart from "../Components/renderBarChart";

const AppDetails = () => {
  const { id } = useParams();
  const { allApps } = useApps();
  const apps = allApps.find((p) => p.id === Number(id));
  console.log(apps);
  // const ratingData = apps.ratings;
  // console.log(ratingData);

  const { image, title, downloads, size, companyName, ratings, description } =
    apps || {};
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
          <div className="flex ">
            <div>
              <img src={DownImg} alt="" />
              <p>Downloads</p>
              <h2>{downloads}</h2>
            </div>
            <div>
              <img src={DownImg} alt="" />
              <p>Downloads</p>
              <h2>{downloads}</h2>
            </div>
            <div>
              <img src={DownImg} alt="" />
              <p>Downloads</p>
              <h2>{downloads}</h2>
            </div>
          </div>
          <button className="btn w-fit btn-primary">
            Install Now ({size}MB)
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
