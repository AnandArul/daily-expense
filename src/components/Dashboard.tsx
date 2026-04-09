import React from "react";
import ChartCard from "./ChartCard";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <h2 className="text-2xl font-bold mb-4 text-green-600">
          {/* text-[#f6cbf5] */}
          Hello Arul!
        </h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 mt-4">
          <div className="row-span-3 bg-gray-200 col-start-1 border rounded border-none">
            <ChartCard />
          </div>
          <div className="bg-gray-200">2</div>
          <div className="bg-gray-200">2</div>
          <div className="col-span-2 row-span-2 bg-gray-200">3</div>
        </div>
      </div>
      {/* <div className="border border-gray-300 min-h-screen rounded p-4 overflow-auto">
        <h2>Dashboard</h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
          <div className="row-span-3 bg-gray-200 col-start-1">1</div>
          <div className="col-span-2 bg-gray-200">2</div>
          <div className="col-span-2 row-span-2 bg-gray-200">3</div>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
