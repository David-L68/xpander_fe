import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./AlgosPage.css";
import { useNavigate } from "react-router-dom";

const AlgosPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  };

  const handleRunClick = () => {
    console.log(selectedCard);
    navigate("/output");
  };

  return (
    <Container className="mt-5 pt-5 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-6">Please choose a clustering method:</h1>
      <Container className="d-flex mt-5 justify-content-center gap-4">
        <Card
          style={{ width: "18rem" }}
          onClick={() => handleCardClick("Matisse")}
          className={selectedCard === "Matisse" ? "selected-card" : ""}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Matisse</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          onClick={() => handleCardClick("Degas")}
          className={selectedCard === "Degas" ? "selected-card" : ""}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Degas</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          onClick={() => handleCardClick("Click")}
          className={selectedCard === "Click" ? "selected-card" : ""}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Click</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          onClick={() => handleCardClick("Samba")}
          className={selectedCard === "Samba" ? "selected-card" : ""}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Samba</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Button
        variant="primary"
        className="mt-5"
        size="lg"
        onClick={handleRunClick}
      >
        Run selected clustering method
      </Button>
      <Container>
        <Button
          variant="primary"
          className="mt-5"
          size="lg"
          onClick={() => navigate("/input")}
        >
          Back
        </Button>
      </Container>
    </Container>
  );
};

export default AlgosPage;
