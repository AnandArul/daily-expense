import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import {
  House,
  CircleDollarSign,
  ChartNoAxesCombined,
  Settings,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: <House /> },
  { label: "Expenses", path: "/expenses", icon: <CircleDollarSign /> },
  { label: "Reports", path: "/reports", icon: <ChartNoAxesCombined /> },
  { label: "Settings", path: "/settings", icon: <Settings /> },
];

const LeftsideMenu = () => {
  return (
    <>
      <aside className="w-64 p-4 border-e border-[#8D5F8C]">
        <h2 className="text-lg font-bold mb-2 text-[#f7d2f7]">MyApp</h2>
        <nav className="space-y-2 mt-4 text-[#DDC3C3]">
          {menuItems.map((menu) => (
            <NavLink
              className={({ isActive }) =>
                `menu-item flex items-center gap-2${isActive ? " active" : ""}`
              }
              to={menu.path}
              key={menu.path}
            >
              {menu.icon}
              <span>{menu.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default LeftsideMenu;
