import { Fullscreen } from "lucide-react";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const RatingsBarChart = ({ ratings }) => {
  return (
    <div className="flex justify-center items-center p-6">
      <BarChart
        width={1500}
        height={350}
        data={ratings}
        layout="vertical"
        margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
      >
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" stroke="#8884d8" />{" "}
        <Tooltip
          wrapperStyle={{
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        />
        <Bar
          dataKey="count"
          name="Ratings Count"
          fill="#ff8811"
          barSize={40}
          radius={[0, 5, 5, 0]}
        />
      </BarChart>
    </div>
  );
};

export default RatingsBarChart;
