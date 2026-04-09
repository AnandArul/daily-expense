import { Outlet } from "react-router-dom";
import TopHeader from "./layout/TopHeader";
import LeftsideMenu from "./layout/LeftsideMenu";

export default function App() {
  return (
    <>
      <div className="flex h-screen ">
        <LeftsideMenu />
        <main className="flex-1 flex flex-col overflow-hidden p-4">
          <div className="h-10 text-[#8D5F8C]">
            <TopHeader />
          </div>

          <div className="flex-1 overflow-auto mt-4">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
