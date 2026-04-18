import React from "react";
import BarChart from "./charts/BarChart";

const ChartCard = () => {
  return (
    <>
      <div className="shadow-sm rounded p-2">
        <h2 className="m-0">Chart</h2>
        <div className="chart-placeholder h-50 mt-1 rounded">
          <BarChart />
        </div>
        {/* <div className="chart-placeholder h-48 bg-gray-200 mt-1 rounded"></div> */}
      </div>
    </>
  );
};

export default ChartCard;
