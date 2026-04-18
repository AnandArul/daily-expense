import useAuthStore from "../store/authStore";
const { setAuth, setLogout } = useAuthStore.getState();

interface LoginForm {
  username: string;
  password: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface AuthMethods {
  login: (form: LoginForm, userData: UserData) => boolean;
  logout: () => void;
}

const login: AuthMethods["login"] = (
  form: LoginForm,
  userData: UserData,
): boolean => {
  console.log("Auth Login");
  console.log(form);
  console.log(userData);
  setAuth(userData, true);

  return true;
  // navigate("/dashboard");

  // const setUser = useAuthStore((state) => state.userDetails);
};
const logout: AuthMethods["logout"] = () => {
  console.log("Auth Logout");
  setLogout();
};

const auth: AuthMethods = { login, logout };

export default auth;
