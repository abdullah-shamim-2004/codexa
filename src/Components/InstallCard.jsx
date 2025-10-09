import { Download, Star } from "lucide-react";
import React from "react";
import { removeFromAppList } from "../Utilites/LocalStorage";

const InstallCard = ({ app, setApplist }) => {
  const { image, id, title, downloads, ratingAvg, size } = app;
  const handleUnistall = () => {
    removeFromAppList(id);
    setApplist((prev) => prev.filter((p) => p.id !== id));
  };
  return (
    <div className="flex items-center justify-between bg-white shadow-sm rounded-xl p-4 w-full max-w-screen-2xl mx-auto">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-lg">
          <img className="rounded-lg" src={image} alt="" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <div className="flex items-center gap-3 mt-1 text-sm">
            <div className="flex items-center gap-1 text-green-500">
              <Download size={16} />
              <span> {downloads}</span>
            </div>
            <div className="flex items-center gap-1 text-orange-500">
              <Star size={16} />
              <span>{ratingAvg}</span>
            </div>
            <span className="text-gray-500">{size}MB</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleUnistall}
        className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallCard;
