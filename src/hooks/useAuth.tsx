import { useEffect, useState } from "react";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const isAuthenticated = () => {
      const accessToken = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");
      const userInfo = localStorage.getItem("user_info");
      if (accessToken && refreshToken && userInfo) return true;
      return false;
    };
    const getUserInfo = () => localStorage.getItem("user_info") ?? {};
    const authChecker = isAuthenticated();
    const userInfo = getUserInfo();
    setAuthenticated(() => authChecker);
    setUserInfo(() => userInfo);
  }, []);
  return [authenticated, userInfo];
};
export default useAuth;
