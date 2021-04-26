import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const { children } = props;

  const [idToken, setIdToken] = useLocalStorage("idToken");

  return (
    <AuthContext.Provider value={[idToken, setIdToken]}>
      {children}
    </AuthContext.Provider>
  );
};
