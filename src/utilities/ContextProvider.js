import { createContext, useState } from "react";

export const Context = createContext();

const colorList = [
  { color: "red", value: "#ff0000" },
  { color: "green", value: "#00ff00" },
  { color: "blue", value: "#0000ff" },
];

function ContextProvider({ children }) {
  const [allColors, setAllColors] = useState(colorList);

  console.log("from ContextProvider --> ", allColors);

  return (
    <Context.Provider value={{ allColors, setAllColors }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
