import { motion } from "framer-motion";
import { Button, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      style={{ height: "100%" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Container className="mt-5 pt-5 d-flex flex-column justify-content-center align-items-center">
        <h2>Welcome to the Xpander Website</h2>
        <Button
          onClick={() => navigate("/input")}
          className="mt-5 p-3"
          variant="primary"
          size="lg"
        >
          Start using Xpander
        </Button>{" "}
        <Container className="d-flex flex-row justify-content-center align-items-center mt-5">
          <Image
            src="./assets/Dall-E_xpander_v1.webp"
            alt="Xpander Logo"
            className="img_cont"
            rounded
          />
        </Container>
      </Container>
    </motion.div>
  );
};

export default HomePage;
