import { create } from "zustand";

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

const useAuthStore = create<AuthData>((set) => ({
  user: null,
  isAuthenticated: false,

  setAuth: (user, isAuthenticated) => set({ user, isAuthenticated }),
  setLogout: () => set({ user: null, isAuthenticated: false }),
}));
export default useAuthStore;
// import { create } from "zustand";

// const useAuthStore = create((set) => ({
//   user: null,
//   isAuthenticated: false,

//   userDetails: (user: object, authenticated: boolean) =>
//     set({
//       user: user,
//       isAuthenticated: authenticated,
//     }),

//   //   login: (userData: object) =>
//   //     set({
//   //       user: userData,
//   //       isAuthenticated: true,
//   //     }),

//   //   logout: () =>
//   //     set({
//   //       user: null,
//   //       isAuthenticated: false,
//   //     }),
// }));

// export default useAuthStore;
