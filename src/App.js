import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AnimatedRoutes from "./root/AnimatedRoutes";
import AlgosProvider from "./context/AlgosProvider";

function App() {
  return (
    <BrowserRouter>
      <AlgosProvider>
        <AnimatedRoutes />
      </AlgosProvider>
    </BrowserRouter>
  );
}

export default App;
