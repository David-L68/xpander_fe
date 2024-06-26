import { createContext, useState } from "react";

const AlgosContext = createContext();

const AlgosProvider = ({ children }) => {
  const [algorithm, setAlgorithm] = useState("");
  const [htmlVisualisation, setHtmlVisualisation] = useState(null);

  return (
    <AlgosContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        setHtmlVisualisation,
        htmlVisualisation,
      }}
    >
      {children}
    </AlgosContext.Provider>
  );
};

export { AlgosContext };
export default AlgosProvider;
