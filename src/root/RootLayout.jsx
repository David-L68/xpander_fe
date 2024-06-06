import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <Container className="mt-5 ">
      <Container className="d-flex flex-column">
        <NavBar />
        <Container>
          <Outlet />
        </Container>
      </Container>
    </Container>
  );
};

export default RootLayout;
