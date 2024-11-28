"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define types for the AuthContext
interface AuthContextType {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  resetUser: () => void; // Reset email and password
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component that wraps the entire app
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Reset function to clear email and password (can be called if the user navigates away before completing the flow)
  const resetUser = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <AuthContext.Provider value={{ email, password, setEmail, setPassword, resetUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
