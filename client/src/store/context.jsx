import { useState } from "react";
import { AppContext } from "./context";

// Create Context

const AppProvider = ({ children }) => {
  let [name, setName] = useState("Gourav");
  let [age, setAge] = useState(9);

  let value = {
    name, // variables
    setName, // function
    age,
    setAge,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
