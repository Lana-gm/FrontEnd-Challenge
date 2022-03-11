import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_URL } from "../constants/endpoints";
import api from "../services";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const signIn = (data) => {
    navigate("/login");
    api({
      method: "post",
      url: AUTH_URL,
      data,
    })
      .then((res) => {
        setError(false);
        localStorage.setItem("token", res.headers.authorization);
        localStorage.setItem("username", res?.data?.name);
        localStorage.setItem("gender", res?.data?.gender);
        navigate("/");
      })
      .catch(() => setError(true));
  };

  const signOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
