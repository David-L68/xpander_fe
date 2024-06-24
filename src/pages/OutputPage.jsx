import { motion } from "framer-motion";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { useContext, useEffect, useState } from "react";

// import { AlgosContext } from "../context/AlgosProvider";

import "./OutputPage.css";

const OutputPage = () => {
  const navigate = useNavigate();
  // const { algorithm } = useContext(AlgosContext);
  // const [hierarchicalData, setHierarchicalData] = useState({});
  // console.log(algorithm);

  // var args = {
  //   root: "vis_container",
  //   network_data: hierarchicalData,
  // };

  // var cgm = Clustergrammer(args);

  // useEffect(() => {
  //   const fetchHierarchicalData = async () => {
  //     try {
  //       const response = await fetch("./data/mult_view.json", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //       setHierarchicalData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   if (algorithm === "hierarchical") {
  //     fetchHierarchicalData();
  //   }
  // }, []);

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
          <Container
            id="vis_container"
            className="border border-2 visual_results"
          >
            <iframe src="./Cluster_vis/index2.html"></iframe>
          </Container>
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
