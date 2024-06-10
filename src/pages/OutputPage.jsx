import { motion } from "framer-motion";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";
import "./OutputPage.css";

const OutputPage = () => {
  const navigate = useNavigate();

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <motion.div
      style={{ height: "100%" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Container className="mt-5 d-flex flex-column justify-content-center align-items-center gap-3">
        <h2>Data Visualization</h2>
        <Container className="d-flex align-items-stretch vis_container gap-3">
          <Container className="border border-2 options_menu">
            options menu
          </Container>
          <Container className="border border-2 visual_results">
            <Chart options={options} series={series} type="bar" width="500" />
          </Container>
        </Container>
        <Button
          onClick={() => navigate("/algocards")}
          className="mt-5 p-3 align-self-start"
          variant="primary"
          size="lg"
        >
          Back
        </Button>{" "}
      </Container>
    </motion.div>
  );
};

export default OutputPage;
