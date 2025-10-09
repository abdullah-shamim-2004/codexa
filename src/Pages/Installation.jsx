import React, { useState } from "react";
import { LoadAppList } from "../Utilites/LocalStorage";
// import AppCard from "../Components/AppCard";
import InstallCard from "../Components/InstallCard";

const Installation = () => {
//   const list = LoadAppList();
   const [list, setWishlist] = useState(() => LoadAppList())
  console.log(list);

  return (
    <div>
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
            defaultValue="Pick a color"
            className="select appearance-none"
          >
            <option value="none">Sort by price</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </div>
      </div>
      <div className="gap-3">
        {list.map((app) => (
          <InstallCard key={app.id} app={app}></InstallCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
