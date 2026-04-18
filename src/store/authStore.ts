import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface AuthData {
  user: User | null;
  isAuthenticated: boolean;

  setAuth: (user: User, isAuthenticated: boolean) => void;
  setLogout: () => void;
}

const useAuthStore = create<AuthData>()(
  devtools(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setAuth: (user, isAuthenticated) => set({ user, isAuthenticated }),
      setLogout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "AuthStore", // shows in DevTools
    },
  ),
);

// 👇 ADD THIS
if (typeof window !== "undefined") {
  window.useAuthStore = useAuthStore;
}

// const useAuthStore = create<AuthData>((set) => ({
//   user: null,
//   isAuthenticated: false,

//   setAuth: (user, isAuthenticated) => set({ user, isAuthenticated }),
//   setLogout: () => set({ user: null, isAuthenticated: false }),
// }));
export default useAuthStore;
