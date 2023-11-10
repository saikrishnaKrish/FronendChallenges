import { createContext, useContext, useState } from "react";

//create a context
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthencated] = useState(false);

  const login = () => {
    setIsAuthencated(true);
  };

  const logout = () => {
    setIsAuthencated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
