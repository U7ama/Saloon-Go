import { Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Header() {
  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    <div className="loading position-relative">
      <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4 overflow-hidden">
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="Welcome to Saloon Go" />
          <p className="gray-90 mt-3 fs-5">
            Discover the ease of haircare with Saloon Go, your premier app for
            connecting with top-rated hair stylists and salons in your area.
          </p>
          <Button className="custom-btn-color m-0 my-3 px-5 py-2 fs-5 fw-bold">
            Get You free listing
          </Button>
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-100 my-5"
        >
          <div className="cards">
            <Card className="bg-black-100 rounded">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../images/saloon2.jpeg")}
                  />
                  <i className="fa-regular fa-heart like" onClick={like}></i>
                </div>
                <h5 className="mt-2 text-white fw-normal">Residence Rybna</h5>
                <p className="gray-90">@UA saloon</p>
              </Card.Body>
            </Card>
            <Card className="bg-black-100">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../images/saloon1.jpeg")}
                  />
                  <i className="fa-regular fa-heart like" onClick={like}></i>
                </div>
                <h5 className="mt-2 text-white fw-normal">Blue Sky</h5>
                <p className="gray-90">@ERA Saloon</p>
              </Card.Body>
            </Card>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ color: "white" }}
          className="d-md-none d-flex justify-content-between align-items-center my-4 features"
        >
          <div>
            <h5 className="fw-bold fs-1">12K+</h5>
            <span className="gray-100">properties</span>
          </div>
          <div>
            <h5 className="fw-bold fs-1">10K+</h5>
            <span className="gray-100">auction</span>
          </div>
          <div>
            <h5 className="fw-bold fs-1">12K+</h5>
            <span className="gray-100">developers</span>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Header;
