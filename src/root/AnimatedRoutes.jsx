import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "../pages/HomePage";
import InputPage from "../pages/InputPage";
import RootLayout from "./RootLayout";
import OutputPage from "../pages/OutputPage";
import AlgosPage from "../pages/AlgosPage";
import GoEnrichment from "../pages/GoEnrichment";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/input" element={<InputPage />} />{" "}
          <Route path="/algocards" element={<AlgosPage />} />{" "}
          <Route path="/output" element={<OutputPage />} />
          <Route path="/goenrichment" element={<GoEnrichment />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
