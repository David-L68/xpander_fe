import { motion } from "framer-motion";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./OutputPage.css"

const OutputPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
    style={{height: "100%"}}
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Container className="mt-5 d-flex flex-column justify-content-center align-items-center gap-3">
        <h2>Data Visualization</h2>
        <Container className="d-flex align-items-stretch vis_container gap-3">
          <Container className="border border-2 options_menu">options menu</Container>
          <Container className="border border-2 visual_results">visual results</Container>
        </Container>
        <Button
          onClick={() => navigate("/algocards")}
          className="mt-5 p-3 align-self-start"
          variant="primary"
          size="lg"
        >
          Back
        </Button>{" "}
      </Container>
    </motion.div>
  );
};

export default OutputPage;
