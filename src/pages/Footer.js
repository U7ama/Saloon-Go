import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="d-flex justify-content-between flex-column flex-md-row flex-wrap pt-5 pb-4">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={require("../images/logo/logo.png")}
              alt="logo"
              className="mb-3 w-25"
            />
            <p className="gray-100">
              Please contact us if you have any specific <br /> idea or request.
            </p>
            {/* <Link className="link-primary link-underline-opacity-0" to={""}>
              info@revend.group
            </Link> */}
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
            {/* <div>
              <h6 className="gray-100 text-uppercase mb-2 fw-normal">
                Socials
              </h6>
              <ul className="p-0">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div> */}
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
