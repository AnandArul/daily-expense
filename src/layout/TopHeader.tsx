import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="flex flex-row gap-1">
        <div className="grow-7 bg-[#8D5F8C] text-white p-2">03</div>
        <div className="grow-3 bg-[#8D5F8C] text-white p-2">02</div>
      </div>
      {/* <div className="w-full h-[60px] text-white border-b border-purple-200 flex items-center justify-center px-2">
        <div>Logo</div>
        <div>Search</div>
        <div className="ml-auto">User</div>
      </div> */}
    </>
  );
};
export default TopHeader;
