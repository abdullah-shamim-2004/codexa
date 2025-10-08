import React from "react";
import HeroImage from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center flex flex-col ">
        <div className="max-w-md">
          <h1 className="text-7xl font-semibold">
            We Build <span className="text-[#915ded] ">Productive</span> Apps
          </h1>
          <p className="py-6">
            At Codexa.IO, we craft innovative apps designed to make everyday
            life simpler, smarter, and more exciting.Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div>
            <button className="btn mr-2.5 p-5">Google Play</button>
            <button className="btn p-5">App Store</button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="" />
        </div>
        <div className="stats shadow min-w-screen-xl">
          <div
            className="flex
          flex-col bg-linear-to-br from-[#632ee3] to-[#9f62f3]"
          >
            <div>
              <h1 className="text-5xl font-bold text-white py-5">Trusted by Millions, Built for You</h1>
            </div>
            <div className="flex">
              <div className="stat">
                <div className="stat-figure text-primary"></div>
                <div className="stat-title">Total Likes</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value text-secondary">2.6M</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-value">86%</div>
                <div className="stat-title">Tasks done</div>
                <div className="stat-desc text-secondary">
                  31 tasks remaining
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
