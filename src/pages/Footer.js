import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function Footer() {
  const mapStyles = {
    height: "120px",
    width: "120%",
  };

  const defaultCenter = {
    lat: 31.5826,
    lng: 74.3276,
  };

  return (
    <footer>
      <Container>
        <div className="d-flex justify-content-between flex-column flex-md-row flex-wrap pt-5 pb-4">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="mt-2 text-white fw-normal">About Us</h5>
            <p className="gray-100">
              Enjoy personalized hair styling and treatments at your
              convenience,
              <br />
              and experience the luxury of professional haircare tailored to
              your
              <br />
              needs and schedule. With Saloon Go, every day is a great hair day!{" "}
              <br /> idea or request.
            </p>
          </motion.div>
          <span className="d-block d-md-none"></span>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="d-flex"
          >
            <div className="me-5">
              <h6 className="gray-100 text-uppercase mb-2 fw-normal">
                Get Help
              </h6>
              <ul className="p-0">
                <li>Track Your Booking</li>
                <li>Gift Cards</li>
                <li>Feedback</li>
              </ul>
            </div>
            <div className="me-5">
              <h6 className="gray-100 text-uppercase mb-2 fw-normal">
                Our Company
              </h6>
              <ul className="p-0">
                <li>Register as Seller</li>
                <li>Register as User</li>
                <li>Write for Us</li>
              </ul>
            </div>
            <div className="me-5">
              <h6 className="gray-100 text-uppercase mb-2 fw-normal">
                Our Location
              </h6>
              {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={13}
                  center={defaultCenter}
                />
              </LoadScript> */}
              <img
                style={mapStyles}
                src={require("../images/map.jpeg")}
                className="p-0 img"
                alt="img"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="d-flex justify-content-between flex-column flex-md-row flex-wrap gray-100 pt-3"
        >
          <p>
            <i className="fa-brands fa-2x fa-facebook"></i>{" "}
            <i className="fa-brands fa-2x fa-instagram"></i>{" "}
            <i className="fa-brands fa-2x fa-linkedin"></i>
          </p>
          <p>© {new Date().getFullYear()} Saloon Go. All rights reserved</p>
          <p></p>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;
