import React from "react";
import Banner from "../Components/Banner";
// import { useLoaderData } from "react-router";
import useApps from "../Hooks/useApps";
import Loader from "../Components/Loader";
import AppCard from "../Components/AppCard";
import { Link } from "react-router";
import Footer from "../Components/Footer";

const Home = () => {
  const { allApps, loading } = useApps();
  const data = allApps.slice(0, 8);

  return (
    <div className="text-center">
      <Banner></Banner>
      <div className="">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-1.5">Trending Apps</h1>
          <p className="text-gray-700">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div>
          {loading ? (
            <Loader></Loader>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
              {data.map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))}
            </div>
          )}
        </div>
        <div>
          <Link to="/Apps">
            <button className="btn shadow-lg border-none text-white text-xl font-bold my-15 bg-linear-to-r from-[#642fe4] to-[#7566f7] hover:scale-105 transition ease-in-out">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
