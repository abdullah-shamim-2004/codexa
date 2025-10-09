import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import Loader from "../Components/Loader";
import AppCard from "../Components/AppCard";
import { Link } from "react-router";

const Apps = () => {
  const [search, setSearch] = useState("");
  const { allApps, loading } = useApps();
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
    }, 400);
  };

  const filter = allApps.filter((app) =>
    app.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  const showLoader = loading || isSearching;

  return (
    <div>
      <div className="flex flex-col items-center my-5">
        <h1 className="text-2xl lg:text-5xl font-bold mb-1.5">Our All Applications</h1>
        <p className="text-gray-700 ">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="my-3.5 flex justify-between items-center">
        <h3 className="text-xl lg:text-2xl font-semibold">
          (<span>{filter.length}</span>) Apps Found
        </h3>
        <label className="input flex items-center border rounded-md px-2">
          <svg
            className="h-[1em] opacity-50 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={handleSearch}
            value={search}
            type="search"
            placeholder="Search"
            className="outline-none w-full"
          />
        </label>
      </div>

      {showLoader ? (
        <Loader />
      ) : filter.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[60vh] text-center">
          <h2 className="text-4xl font-bold text-gray-600 mb-3">
            No App Found
          </h2>
          <Link to="/" className="btn ">Go Home</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {filter.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
