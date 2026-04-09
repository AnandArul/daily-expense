import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Expenses from "../components/Expenses";
import Reports from "../components/Reports";
import Settings from "../components/Settings";

import App from "../App";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path=""></Route> */}
        <Route path="/login" element={<Login />} />
        <Route element={<App />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
};
export default AppRoutes;
