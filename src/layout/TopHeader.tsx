import React from "react";

// Search;

import { Search, User, Bell } from "lucide-react";

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
          {/* bg-[#8D5F8C] */}
          <div className="mr-2 text-[#DDC3C3]">
            <Bell />
          </div>
          <div className="profile">
            <User />
          </div>
        </div>
      </div>
    </>
  );
};
export default TopHeader;
