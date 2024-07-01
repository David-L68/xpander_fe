import axios from "axios";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AlgosContext } from "../context/AlgosProvider";

const InputPage = () => {
  const navigate = useNavigate();
  const { setHtmlVisualisation, setPcaVisualisation } =
    useContext(AlgosContext);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
    setSelectedFile(null);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleRunTest = async () => {
    setIsLoading(true);
    if (selectedFile && selectedMethod) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      let endpoint = "";
      if (selectedMethod === "Hierarchical") {
        endpoint = "http://rack-elkon-03.cs.tau.ac.il:8080/input/hierarchical/";
      } else if (selectedMethod === "PCA") {
        endpoint = "http://rack-elkon-03.cs.tau.ac.il:8080/input/pca/";
      }

      try {
        const response = await axios.post(endpoint, formData);
        console.log("File uploaded successfully:", response.data);
        if (selectedMethod === "Hierarchical") {
          setHtmlVisualisation(response.data.link);
        } else if (selectedMethod === "PCA") {
          // console.log(response.data);
          setPcaVisualisation(response.data)
        }
        navigate("/algocards");
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      console.error("Please select both a method and a file");
    }
  };

  return (
    <motion.div
      style={{ height: "100%" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Container className="mt-5 pt-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-6">
          Please select a method and upload your file:
        </h1>

        <Form.Group
          controlId="formFileLg"
          className="d-flex flex-column gap-4 mb-3 mt-5 flex-grow-1"
        >
          <Form.Select
            size="lg"
            aria-label="Select method"
            value={selectedMethod}
            onChange={handleMethodChange}
          >
            <option value="">Choose method</option>
            <option value="Hierarchical">Hierarchical Clustering</option>
            <option value="PCA">PCA K-Means</option>
          </Form.Select>

          {selectedMethod && (
            <Form.Control
              name="file"
              type="file"
              size="lg"
              onChange={handleFileChange}
            />
          )}

          <Button
            onClick={handleRunTest}
            className="mt-5 p-3"
            variant="primary"
            size="lg"
            disabled={isLoading || !selectedMethod || !selectedFile}
          >
            {isLoading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Loading...
              </>
            ) : (
              "Run Test"
            )}
          </Button>
        </Form.Group>
      </Container>
    </motion.div>
  );
};

export default InputPage;
