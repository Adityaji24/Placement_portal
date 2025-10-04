import React, { createContext, useState } from "react";
import { registerUser, loginUser } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (formData) => {
    const res = await registerUser(formData);
    return res.data;
  };

  const login = async (formData) => {
    const res = await loginUser(formData);
    setUser(res.data);
    return res.data;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
