import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import InputPage from "../pages/InputPage";
import RootLayout from "./RootLayout";
import { AnimatePresence } from "framer-motion";
import OutputPage from "../pages/OutputPage";
import AlgosPage from "../pages/AlgosPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/input" element={<InputPage />} />{" "}
          <Route path="/algocards" element={<AlgosPage/>} />{" "}
          <Route path="/output" element={<OutputPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
