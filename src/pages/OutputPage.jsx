import { motion } from "framer-motion";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { AlgosContext } from "../context/AlgosProvider";
import "./OutputPage.css";

const OutputPage = () => {
  const navigate = useNavigate();
  const { algorithm } = useContext(AlgosContext);
  // console.log(algorithm);
  const [visHtml, setVisHtml] = useState("");

  useEffect(() => {
    const fetchVisHtml = async () => {
      try {
        const formData = new FormData();
        const file = await getFileBlob("./data/example_tsv.txt");
        formData.append("file", file, "example_tsv.txt");

        const response = await axios.post(
          "http://amp.pharm.mssm.edu/clustergrammer/matrix_upload/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          // console.log(response.data);
          setVisHtml(response.data);
        } else {
          console.error("Failed to fetch visualization HTML");
        }
      } catch (error) {
        console.error("Error fetching visualization HTML:", error);
      }
    };
    if (algorithm === "hierarchical") {
      fetchVisHtml();
    }
  }, []);

  const getFileBlob = async (filePath) => {
    try {
      const response = await axios.get(filePath, {
        responseType: "blob",
      });
      return new Blob([response.data]);
    } catch (error) {
      console.error(`Error fetching file ${filePath}:`, error);
      throw error;
    }
  };

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
          {/* <Container className="border border-2 options_menu">
            options menu
          </Container> */}
          <Container
            id="vis_container"
            className="border border-2 visual_results"
          >
            <iframe
              style={{ width: "100%", height: "100%" }}
              src={visHtml}
              frameborder="0"
            ></iframe>
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
