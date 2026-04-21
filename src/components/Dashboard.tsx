import { useMemo } from "react";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import LineChart from "./charts/LineChart";

import transactions from "../assets/transactions";

const Dashboard = () => {
  const { chartLabels, chartValues } = useMemo(() => {
    // Group by type and sum amounts
    const grouped: Record<string, number> = transactions
      .filter((t) => t.type === "Expense")
      .reduce(
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

  const recentTxns = useMemo(() => {
    return transactions
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 8);
  }, [transactions]);

  return (
    <>
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-[#ddc3c3] shrink-0">
          Hello Arul!
        </h2>

        <div className="grid grid-cols-3 grid-rows-2 gap-4 flex-1 min-h-0">
          {/* LEFT - Recent Transactions */}
          <div className="row-span-2 flex flex-col min-h-0 border rounded border-[#a376a2]">
            <div className="h-10 shrink-0 flex items-center px-4 border-b border-[#a376a2] text-[#ddc3c3] font-semibold">
              Recent Transactions
            </div>
            <div className="flex-1 overflow-y-auto min-h-0 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#a376a2] [&::-webkit-scrollbar-thumb]:rounded-full">
              {recentTxns.map((txn, i) => (
                <div
                  key={i}
                  className="px-3 py-3 flex justify-between items-center gap-2 hover:bg-[#a376a2]/20 border-b border-[#f7d2f7]/5 last:border-b-0"
                >
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-[#f7d2f7] truncate text-sm">
                      {txn.title}
                    </h4>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      <span className="border border-[#f7d2f7]/30 rounded-full px-2 text-[10px] leading-5 whitespace-nowrap text-[#f7d2f7]/70">
                        {txn.type}
                      </span>
                      <span className="border border-[#f7d2f7]/30 bg-[#f7d2f7]/15 rounded-full px-2 text-[10px] leading-5 whitespace-nowrap text-[#f7d2f7]/80">
                        {txn.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold shrink-0 text-amber-300">
                    ${txn.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* PIE CHART */}
          <div className="flex flex-col min-h-0 border rounded border-[#a376a2]">
            <div className="h-10 shrink-0 flex items-center px-4 border-b border-[#a376a2] text-[#ddc3c3] font-semibold">
              Income vs Expense
            </div>
            <div className="flex-1 px-4 pb-4 pt-2 flex items-center justify-center min-h-0 overflow-hidden">
              <div className="w-full h-full relative">
                <PieChart />
              </div>
            </div>
          </div>

          {/* BAR CHART */}
          <div className="flex flex-col min-h-0 border rounded border-[#a376a2]">
            <div className="h-10 shrink-0 flex items-center px-4 border-b border-[#a376a2] text-[#ddc3c3] font-semibold">
              Category wise Expenses
            </div>
            <div className="flex-1 px-4 pb-4 pt-2 flex items-center justify-center min-h-0 overflow-hidden">
              <div className="w-full h-full">
                <BarChart labels={chartLabels} values={chartValues} />
              </div>
            </div>
          </div>

          {/* ANALYTICS */}
          <div className="col-span-2 flex flex-col min-h-0 border rounded border-[#a376a2] overflow-hidden">
            <div className="h-10 shrink-0 flex items-center px-4 border-b border-[#a376a2] text-[#ddc3c3] font-semibold">
              Monthly Expenses overview
            </div>
            <div className="flex-1 p-4 min-h-0 overflow-auto">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <h2 className="text-2xl font-bold mb-2 text-[#ddc3c3]">Hello Arul!</h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          <div className="row-span-3 col-start-1 min-h-full border rounded border-[#a376a2]">
            <div className=" p-2">Recent Transactions</div>
            <div>
              <div className="bg-red-50 px-2 py-3">Item 1</div>
            </div>
          </div>
          <div className="border rounded h-60 border-[#a376a2]">
            <PieChart />
          </div>
          <div className="border rounded h-60 border-[#a376a2]">
            <BarChart labels={chartLabels} values={chartValues} />
          </div>
          <div className="col-span-2 row-span-2 border rounded h-60 border-[#a376a2] h-95">
            3
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
