import React, { createContext, useState, useContext } from "react";

export const Authcontext = createContext();
export default function authprovider({ children }) {
  const initialautuser = localStorage.getItem("Users");
  const [authuser, setauthuser] = useState(
    initialautuser ? JSON.parse(initialautuser) : undefined
  );
  return (
    <Authcontext.Provider value={[authuser, setauthuser]}>
      {children}
    </Authcontext.Provider>
  );
};

export const useauth = () => useContext(Authcontext);
