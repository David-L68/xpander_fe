import { createContext, useState } from "react";

const AlgosContext = createContext();

const AlgosProvider = ({ children }) => {
  const [algorithm, setAlgorithm] = useState("");

  return (
    <AlgosContext.Provider value={{ algorithm, setAlgorithm }}>
      {children}
    </AlgosContext.Provider>
  );
};

export { AlgosContext };
export default AlgosProvider;
