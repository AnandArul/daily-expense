import { useMemo } from "react";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";

import transactions from "../assets/transactions";

const Dashboard = () => {
  const { chartLabels, chartValues } = useMemo(() => {
    // Group by type and sum amounts
    const grouped: Record<string, number> = transactions.reduce(
      (acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + item.amount;
        return acc;
      },
      {} as Record<string, number>,
    );

    // Extract unique types and totals (sorted order)
    const types = Object.keys(grouped).sort();
    const totals = types.map((category) => grouped[category]);

    return {
      chartLabels: types,
      chartValues: totals,
    };
  }, []);

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-2 text-[#ddc3c3]">Hello Arul!</h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          <div className="row-span-3 col-start-1 border rounded h-auto border-[#a376a2]">
            <div className="h-10 border-b-1 border-[#a376a2] py-2 px-2">
              <input className="border-1 border-[#a376a2] w-80 rounded bg-[#ddc3c3]/50" />
            </div>
            <div className="bg-red-50 py-4">Hello</div>
            {/* <PieChart /> */}
          </div>
          <div className="border rounded h-60 border-[#a376a2]">
            <PieChart />
            {/* <BarChart labels={chartLabels} values={chartValues} /> */}
          </div>
          <div className="border rounded h-60 border-[#a376a2]">
            <BarChart labels={chartLabels} values={chartValues} />
          </div>
          <div className="col-span-2 row-span-2 border rounded h-60 border-[#a376a2] h-95">
            3
          </div>
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
