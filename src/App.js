import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import InputPage from "./pages/InputPage";
import "./App.css";
import RootLayout from "./root/RootLayout";
import HomePage from "./pages/HomePage";
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes/>
    </BrowserRouter>
  );
}

export default App;
