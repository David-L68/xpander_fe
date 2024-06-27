import { motion } from "framer-motion";
import { Button, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="homepage-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Container className="d-flex gap-4 flex-column justify-content-center align-items-center h-100">
        <h1 className="mb-4 text-center">Welcome to the Xpander Website</h1>
        <Button
          onClick={() => navigate("/input")}
          className="mb-4 px-4 py-2"
          variant="primary"
          size="lg"
        >
          Start using Xpander
        </Button>
        <Image
          src="./assets/logo_xpander_3.webp"
          alt="Xpander Logo"
          className="img_cont"
          rounded
          fluid
        />
      </Container>
    </motion.div>
  );
};

export default HomePage;