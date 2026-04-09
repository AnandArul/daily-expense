import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import useAuthStore from "../store/authStore";

import auth from "../auth/Authorize";

const initialForm = {
  username: "",
  password: "",
};

const userData = {
  id: 1,
  name: "Arul",
  email: "arul@test.com",
  phone: "+91 00000 00000",
};

const LoginPage = () => {
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();
  //   const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const res = auth.login(form, userData);
    if (res) {
      navigate("/dashboard");
    }
  };
  return (
    <div className="min-h-screen flex bg-white">
      <div className="w-[50%] flex align-middle justify-center items-center">
        <div>
          <h2>Welcome back</h2>
          <p className="text-xs">Sign in to continue your account</p>
          <form onSubmit={handleSubmit}>
            <div className="login-page  w-[500px]  py-4">
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  name="username"
                  onChange={(e) => {
                    setForm({ ...form, username: e.target.value });
                  }}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                  }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <button className="bg-gray-500 hover:bg-gray-400 text-white px-6 py-1 cursor-pointer rounded">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#6b3f69] text-[white] hover:bg-[#875185] px-6 py-1 cursor-pointer rounded"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <div className="py-2 flex align-center justify-center text-sm">
            or
          </div>
          <div className="py-4 flex justify-between">
            <button className="bg-fuchsia-900 text-white px-6 py-2 rounded cursor-pointer">
              Sign in with Google
            </button>
            <button className="bg-purple-900 text-white px-6 py-2 rounded cursor-pointer">
              Sign in with Microsoft
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] border rounded-l-lg border-[#6b3f69] bg-[#6b3f69] p-4 flex items-center justify-center">
        {/* <div className="h-[600px] w-[400px] p-3 rounded bg-[#835382]"> */}
        {/* Login component */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
