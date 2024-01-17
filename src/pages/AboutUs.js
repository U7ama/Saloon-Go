import { Button, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function AboutUs() {
  return (
    <div className="about">
      <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-column"
        >
          <div className="d-flex">
            <div>
              <img
                src={require("..//images/saloon3.jpeg")}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={require("..//images/saloon4.jpeg")}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src={require("..//images/saloon5.jpeg")}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={require("..//images/saloon6.jpeg")}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="About Us" className="title" />
          <p className="gray-50 mb-5">
            Enjoy personalized hair styling and treatments at your convenience,
            and experience the luxury of professional haircare tailored to your
            needs and schedule. With Saloon Go, every day is a great hair day!
          </p>
          <Button variant="primary ms-0" className="custom-btn-color">
            Get Started
          </Button>
        </motion.div>
      </Container>
    </div>
  );
}

export default AboutUs;
