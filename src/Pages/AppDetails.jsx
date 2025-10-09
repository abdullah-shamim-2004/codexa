import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import DownImg from "../assets/icon-downloads.png";
import RatingImg from "../assets/icon-ratings.png";
import ReviewImg from "../assets/icon-review.png";
import RatingsBarChart from "../Components/renderBarChart";
import { LoadAppList, updateList } from "../Utilites/LocalStorage";
import { ToastContainer, toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { allApps } = useApps();
  const apps = allApps.find((p) => p.id === Number(id));

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

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (!apps) return;
    const list = LoadAppList();
    const installed = list.some((p) => p.id === apps.id && p.installed);
    setIsInstalled(installed);
  }, [apps]);

  const handleInstall = () => {
    if (!apps) return;
    updateList(apps);
    setIsInstalled(true);
    toast(`${title} Installed Successfully.`);
  };

  if (!apps) return <p>App Not Found</p>;

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl lg:text-3xl font-bold">{title}</h2>
          <h3 className="text-gray-600">
            Developed By:{" "}
            <span className="text-[#9c70f3] font-bold lg:text-xl">
              {companyName}
            </span>
          </h3>
          <div className="flex gap-10">
            <div>
              <img src={DownImg} alt="" />
              <p>Downloads</p>
              <h2 className=" text-2xl lg:text-4xl font-extrabold">
                {downloads}
              </h2>
            </div>
            <div>
              <img src={RatingImg} alt="" />
              <p>Average Ratings</p>
              <h2 className="text-2xl lg:text-4xl font-extrabold">
                {ratingAvg}
              </h2>
            </div>
            <div>
              <img src={ReviewImg} alt="" />
              <p>Total Reviews</p>
              <h2 className="text-2xl lg:text-4xl  font-extrabold">
                {reviews}
              </h2>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled} // ✅ fixed
            className={`btn text-white lg:px-6 lg:py-3.5 my-4 w-fit lg:text-2xl font-semibold ${
              isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00d390]"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size}MB)`}{" "}
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
