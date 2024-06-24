import { motion } from "framer-motion";
import { Container, Button } from "react-bootstrap";
import "./GoEnrichment.css";
import { useNavigate } from "react-router-dom";

const GoEnrichment = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      style={{ height: "100%" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Container className="mt-3 d-flex flex-column justify-content-center align-items-center gap-2">
        <Container className="d-flex justify-content-between align-items-center w-100 my-2">
          <Button onClick={() => navigate("/output")} className="ml-auto">
            Back to clustering
          </Button>
          <div className="text-center me-5 pe-5 flex-grow-1">
            <h3 className="mb-0">Go Enrichment Visualization</h3>
          </div>
          <Button
            variant="secondary"
            target="_blank"
            href="https://domino.cs.tau.ac.il/"
          >
            DOMINO
          </Button>
        </Container>

        <Container className="d-flex flex-column align-items-stretch gap-2 enrich_container">
          <Container className="border border-2 options_menu">
            Vis Container
          </Container>
          <Container className="border border-2 visual_results">
            Table container
          </Container>
        </Container>
      </Container>
    </motion.div>
  );
};

export default GoEnrichment;
