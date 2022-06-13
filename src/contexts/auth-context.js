import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: localStorage.getItem("SCRIPTUS_AUTH_TOKEN") ? true : false,
    token: localStorage.getItem("SCRIPTUS_AUTH_TOKEN"),
    user: JSON.parse(localStorage.getItem("scriptus_user")),
  });

  useEffect(() => {
    setAuth({
      isAuth: localStorage.getItem("SCRIPTUS_AUTH_TOKEN") ? true : false,
      token: localStorage.getItem("SCRIPTUS_AUTH_TOKEN"),
      user: JSON.parse(localStorage.getItem("scriptus_user")),
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
