import React from "react";
import HeroImage from "../assets/hero.png";
import PlayImage from "../assets/app.png";
import AppImage from "../assets/app-store.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content min-w-screen-2xl  text-center flex flex-col ">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-7xl font-semibold">
            We Build <br /> <span className="text-[#915ded] ">Productive</span>{" "}
            Apps
          </h1>
          <p className="py-6">
            At Codexa.IO, we craft innovative apps designed to make everyday
            life simpler, <br /> smarter, and more exciting.Our goal is to turn
            your ideas into digital experiences that truly make an impact.
          </p>
          <div className="flex">
            <div className="flex ">
              <a href="https://play.google.com/store/apps?hl=en">
                {" "}
                <button className="btn mr-2.5 p-5">
                  <img src={PlayImage} alt="" />
                  Google Play
                </button>
              </a>
            </div>
            <div className="flex ">
              <a href="https://www.apple.com/app-store/">
                {" "}
                <button className="btn mr-2.5 p-5">
                  <img src={AppImage} alt="" />
                  App Store
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="" />
        </div>
        <div className="stats shadow w-full ">
          <div className="flex flex-col bg-linear-to-br from-[#632ee3] to-[#9f62f3]">
            <div>
              <h1 className="text-5xl font-bold text-white py-5">
                Trusted by Millions, Built for You
              </h1>
            </div>
            <div className="flex">
              <div className="stat">
                <div className="stat-figure text-primary"></div>
                <div className="stat-title gc">Total Downloads</div>
                <div className="stat-value wc">29.6M</div>
                <div className="stat-desc gc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title gc">Total Reviews</div>
                <div className="stat-value wc">906K</div>
                <div className="stat-desc gc">46% more than last month</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title gc">Active Apps</div>
                <div className="stat-value wc">132+</div>
                <div className="stat-desc gc">31 more will lanch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
