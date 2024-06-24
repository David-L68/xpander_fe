
import { motion } from "framer-motion";
// import { useStatse } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const InputPage = () => {
  const navigate = useNavigate();
  

  // const [userFile, setUserFile] = useState("");

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
          <Form.Control type="file" size="lg" />
          <Button
            onClick={() => navigate("/algocards")}
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
