import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ScatterChart } from "@mui/x-charts/ScatterChart";

import { AlgosContext } from "../context/AlgosProvider";
import "./OutputPage.css";

const OutputPage = () => {
  const navigate = useNavigate();
  const { htmlVisualisation, algorithm, pcaVisualisation } =
    useContext(AlgosContext);

  const renderVisualization = () => {
    switch (algorithm) {
      case "Hierarchical":
        return (
          <iframe
            style={{ width: "100%", height: "100%" }}
            src={htmlVisualisation}
            title="Hierarchical Clustering Visualization"
            frameBorder="0"
          ></iframe>
        );
      case "PCA":
        return (
          <ScatterChart
            width={600}
            height={300}
            series={pcaVisualisation}
            // xAxis={pcaVisualisation.xAxis}
            // yAxis={pcaVisualisation.yAxis}
          />
        );
      default:
        return (
          <p>
            No visualization available. Please select an algorithm and run the
            analysis.
          </p>
        );
    }
  };

  return (
    <motion.div
      style={{ height: "100%" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="full-width-container">
        <h3 className="text-center mt-3">Data Visualization</h3>
        <div className="output_container">
          <div id="vis_container" className="visual_results">
            {renderVisualization()}
          </div>
        </div>
        <div className="button-container mt-3">
          <Button
            onClick={() => navigate("/algocards")}
            variant="primary"
            size="lg"
          >
            Back
          </Button>
          <div className="right-buttons">
            <Button
              href="https://domino.cs.tau.ac.il/"
              target="_blank"
              variant="secondary"
              size="lg"
              className="me-2"
            >
              DOMINO
            </Button>
            <Button
              onClick={() => navigate("/goenrichment")}
              variant="primary"
              size="lg"
            >
              GO Enrichment analysis
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OutputPage;
