import { useContext, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AlgosContext } from "../context/AlgosProvider";
import "./AlgosPage.css";

const AlgosPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const { setAlgorithm } = useContext(AlgosContext);
  // const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
    setAlgorithm(cardTitle);
  };

  const handleRunClick = () => {
    navigate("/output");
  };

  return (
    <Container className=" pt-3 d-flex flex-column justify-content-center align-items-center">
      <h2 className="display-6">Please choose a clustering method:</h2>
      <Container className="d-flex mt-3 justify-content-center gap-3">
        <Card
          style={{ width: "18rem" }}
          onClick={() => handleCardClick("Matisse")}
          className={selectedCard === "Matisse" ? "selected-card" : ""}
        >
          <Card.Img
            className="card-img-custom"
            variant="top"
            src="./assets/MatisseSmall.png"
          />
          <Card.Body>
            <Card.Title className="fw-bold">Matisse</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          onClick={() => handleCardClick("hierarchical")}
          className={selectedCard === "hierarchical" ? "selected-card" : ""}
        >
          <Card.Img
            className="card-img-custom"
            variant="top"
            src="./assets/unnamed-chunk-2-1.png"
          />
          <Card.Body>
            <Card.Title className="fw-bold">Hierarchical Clustering</Card.Title>
            <Card.Text className="small ">
              Visualization contains dendrogram trees displayed next to and
              above the expression matrix. The rows and columns in the matrix
              are ordered according to the hierarchical clustering dendrograms.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          onClick={() => handleCardClick("Click")}
          className={selectedCard === "Click" ? "selected-card" : ""}
        >
          <Card.Img
            className="card-img-custom"
            variant="top"
            src="./assets/logo_xpander_2.webp"
          />
          <Card.Body>
            <Card.Title className="fw-bold">Click</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          onClick={() => {
            handleCardClick("Samba")}}
          className={selectedCard === "Samba" ? "selected-card" : ""}
        >
          <Card.Img
            className="card-img-custom"
            variant="top"
            src="./assets/SambaSmall.png"
          />
          <Card.Body>
            <Card.Title className="fw-bold">Samba</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          onClick={() => handleCardClick("som")}
          className={selectedCard === "som" ? "selected-card" : ""}
        >
          <Card.Img
            className="card-img-custom"
            variant="top"
            src="./assets/som.png"
          />
          <Card.Body>
            <Card.Title className="fw-bold">SOM</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          onClick={() => handleCardClick("kmeans")}
          className={selectedCard === "kmeans" ? "selected-card" : ""}
        >
          <Card.Img
            className="card-img-custom"
            variant="top"
            src="./assets/k-means.jpg"
          />
          <Card.Body>
            <Card.Title className="fw-bold">K-Means</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      
      <Button
        variant="primary"
        className="mt-3"
        size="lg"
        onClick={handleRunClick}
      >
        Run selected clustering method
      </Button>

      <Container>
        <Button
          variant="primary"
          className=""
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
