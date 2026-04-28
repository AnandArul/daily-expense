import React from "react";
const Settings = () => {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-[#ddc3c3] shrink-0">
        Settings
      </h2>
      <div className="grid grid-cols-3 gap-4 flex-1 h-full">
        <div className="flex flex-col border rounded border-[#a376a2]">
          <div className="flex-1 overflow-y-auto min-h-0 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#a376a2] [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="px-3 py-3 flex justify-between items-center gap-2 hover:bg-[#a376a2]/20 border-b border-[#f7d2f7]/5 last:border-b-0 cursor-pointer">
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-[#f7d2f7] truncate text-sm">
                  Profile
                </h4>
              </div>
            </div>
            <div className="px-3 py-3 flex justify-between items-center gap-2 hover:bg-[#a376a2]/20 border-b border-[#f7d2f7]/5 last:border-b-0 cursor-pointer">
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-[#f7d2f7] truncate text-sm">
                  Category Settings
                </h4>
              </div>
            </div>
            <div className="px-3 py-3 flex justify-between items-center gap-2 hover:bg-[#a376a2]/20 border-b border-[#f7d2f7]/5 last:border-b-0 cursor-pointer">
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-[#f7d2f7] truncate text-sm">
                  Notifications
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-h-0 h-full col-span-2 border rounded border-[#a376a2] text-[#f7d2f7]">
          <h4 className="p-4 font-medium">My Profile</h4>
          <hr className="border border-[#a376a2]" />
          <div className="p-4 border-b-1 border-[#a376a2] font-medium">
            Personal Information
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <div className="flex items-center justify-between pb-2">
    //     <h2 className="m-0 text-[#ddc3c3]">Settings</h2>
    //   </div>
    //   <div className="h-full flex flex-col shadow-sm border border-[#a376a2] rounded pl-3 pr-4 py-2">
    //     <div className="flex gap-3 min-h-0">hi</div>
    //   </div>
    // </>
  );
};

export default Settings;
