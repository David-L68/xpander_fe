import { motion } from "framer-motion";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
    style={{height: "100%"}}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Container className="mt-5 pt-5 d-flex flex-column justify-content-center align-items-center">
        Welcome to the Xpander Website
        <Button
          onClick={() => navigate("/input")}
          className="mt-5 p-3"
          variant="primary"
          size="lg"
        >
          Start using Xpander
        </Button>{" "}
      </Container>
    </motion.div>
  );
};

export default HomePage;
