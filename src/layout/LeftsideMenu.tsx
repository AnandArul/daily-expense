// import React from "react";
import {
  House,
  CircleDollarSign,
  ChartNoAxesCombined,
  Settings,
} from "lucide-react";

const LeftsideMenu = () => {
  return (
    <>
      <aside className="w-64 p-4 border-e border-[#8D5F8C]">
        <h2 className="text-lg font-bold mb-6 text-[#8D5F8C] mb-2">MyApp</h2>
        <nav className="space-y-2 mt-4 text-[#DDC3C3]">
          <div className="flex">
            <House className="w-5 h-5 mr-2" />
            Dashboard
          </div>
          <div className="flex">
            <CircleDollarSign className="w-5 h-5 mr-2" />
            Expenses
          </div>
          <div className="flex">
            <ChartNoAxesCombined className="w-5 h-5 mr-2" />
            Reports
          </div>
          <div className="flex">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </div>
        </nav>
      </aside>
    </>
  );
};

export default LeftsideMenu;
