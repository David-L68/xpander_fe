import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;