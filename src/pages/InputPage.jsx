import axios from "axios";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AlgosContext } from "../context/AlgosProvider";

const InputPage = () => {
  const navigate = useNavigate();
  const { setHtmlVisualisation } = useContext(AlgosContext);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleRunTest = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      try {
        const response = await axios.post("http://rack-elkon-02.cs.tau.ac.il:8080/input/", formData);
        console.log("File uploaded successfully:", response.data);
        // Optionally navigate to next page or handle response
        setHtmlVisualisation(response.data.link)
        navigate("/algocards")
      } catch (error) {
        console.error("Error uploading file:", error);
        // Handle error
      }
    } else {
      // alert("Please select a file before running the test.");
      navigate("/algocards")
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
        <h1 class="display-6">Please enter your file below:</h1>

        <Form.Group controlId="formFileLg" className="mb-3 mt-5 flex-grow-1">
          <Form.Control name="file" type="file" size="lg" onChange={handleFileChange} />
          <Button
            onClick={handleRunTest}
            className="mt-5 p-3"
            variant="primary"
            size="lg"
          >
            Run Test
          </Button>{" "}
        </Form.Group>
      </Container>
    </motion.div>
  );
};

export default InputPage;
