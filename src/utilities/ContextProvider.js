import { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const [state, setState] = useState("");

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
