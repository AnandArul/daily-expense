import React, { useState, useRef, useEffect } from "react";
import { User, Power, Bolt, UserCog } from "lucide-react";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      {/* Profile Icon */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer w-10 h-10 rounded flex items-center justify-center text-white font-bold"
      >
        <User />
      </div>

      {/* Popover */}
      {open && (
        <div className="absolute right-0 mt-1 w-56 bg-white shadow-lg rounded-xl border p-3 z-50">
          <p className="font-semibold text-[#6b3f69]">Arul</p>
          <p className="text-sm text-gray-500">arul@email.com</p>

          <div className="mt-3 border-t pt-2">
            <button className="block w-full text-left px-2 py-1 text-[#6b3f69] hover:bg-gray-100 rounded cursor-pointer text-sm flex items-center">
              <UserCog className="h-[18px] w-[18px] mr-2" /> Profile
            </button>
            <button className="block w-full text-left px-2 py-1 text-[#6b3f69] hover:bg-gray-100 rounded cursor-pointer text-sm flex items-center">
              <Bolt className="h-[18px] w-[18px] mr-2" /> Settings
            </button>
            <button className="block w-full text-left px-2 py-1  hover:bg-gray-100 rounded cursor-pointer text-[#6b3f69] flex items-center text-sm">
              <Power className="h-[18px] w-[18px] mr-2 text-red-500 " /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
