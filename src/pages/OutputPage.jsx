import { motion } from "framer-motion";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./OutputPage.css";

const OutputPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      style={{ height: "100%" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Container className="mt-3 d-flex flex-column justify-content-center align-items-center gap-2">
        <h3>Data Visualization</h3>
        <Container className="d-flex align-items-stretch gap-2 output_container">
          <Container className="border border-2 options_menu">
            options menu
          </Container>
          <Container className="border border-2 visual_results">Visualization</Container>
        </Container>
        <Container className="d-flex mt-2">
          <Button
            onClick={() => navigate("/algocards")}
            className="me-auto p-2 align-self-start"
            variant="primary"
            size="lg"
          >
            Back
          </Button>{" "}
          <Button
            href="https://domino.cs.tau.ac.il/"
            target="_blank"
            className=" p-2 align-self-start"
            variant="secondary"
            size="lg"
          >
            DOMINO
          </Button>{" "}
          <Button
            onClick={() => navigate("/goenrichment")}
            className="ms-4 p-2 align-self-start"
            variant="primary"
            size="lg"
          >
            GO Enrichment analysis
          </Button>{" "}
        </Container>
      </Container>
    </motion.div>
  );
};

export default OutputPage;
