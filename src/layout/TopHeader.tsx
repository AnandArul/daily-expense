import React from "react";
import Profile from "./ProfilePopover";

// Search;

import { Search, Bell } from "lucide-react";

const TopHeader = () => {
  return (
    <>
      <div className="flex flex-row gap-1">
        <div className="grow-7 text-white py-2">
          <div className="search-box w-100 ">
            <Search />
            <input name="search" placeholder="Search..." />
          </div>
        </div>
        <div className="grow-3 text-white p-2  flex items-center justify-end">
          <div className="mr-2 text-[#DDC3C3]">
            <Bell />
          </div>
          <div className="profile">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};
export default TopHeader;
