import { createContext, useState } from "react";

const AlgosContext = createContext();

const AlgosProvider = ({ children }) => {
  const [algorithm, setAlgorithm] = useState("");
  const [htmlVisualisation, setHtmlVisualisation] = useState(null);
  const [pcaVisualisation, setPcaVisualisation] = useState([]);

  return (
    <AlgosContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        setHtmlVisualisation,
        htmlVisualisation,
        pcaVisualisation,
        setPcaVisualisation
      }}
    >
      {children}
    </AlgosContext.Provider>
  );
};

export { AlgosContext };
export default AlgosProvider;
