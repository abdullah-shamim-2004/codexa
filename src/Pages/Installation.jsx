import React, { useState } from "react";
import { LoadAppList } from "../Utilites/LocalStorage";
import InstallCard from "../Components/InstallCard";
const Installation = () => {
  const [list, setApplist] = useState(() => LoadAppList());

  const [sortOrder, setSortOrder] = useState("none");

  if (!list.length)
    return (
      <div className="min-w-screen-2xl min-h-screen-2xl m-auto bg-gray-100 flex justify-center items-center">
        <h1 className="text-3xl font-bold ">You don't installed any app.</h1>
      </div>
    );

  const sortItems = () => {
    if (sortOrder === "price-asc") {
      return [...list].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "price-desc") {
      return [...list].sort((a, b) => b.size - a.size);
    } else {
      return list;
    }
  };

  return (
    <div className="min-h-screen">
      <div>
        <div className="flex flex-col items-center my-5">
          <h1 className="text-5xl font-bold mb-1.5">Your Installed Apps</h1>
          <p className="text-gray-700">
            Explore All Trending Apps on the Market developed by us.
          </p>
        </div>
        <div className="my-3.5 flex justify-between items-center">
          <h3 className="text-2xl font-semibold">
            (<span>{list.length}</span>) Apps Found
          </h3>
          <select
            className="select appearance-none"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by price</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </div>
      </div>
      <div className="gap-3">
        {sortItems().map((app) => (
          <InstallCard
            key={app.id}
            setApplist={setApplist}
            app={app}
          ></InstallCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
