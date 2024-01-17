import { Button, Container } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";

function Subscribe() {
  return (
    <div className="subscribe">
      <Container>
        <AnimationTitles
          title={`Get Started Today`}
          className="title text-center mx-auto w-75"
        />
        <p className="gray-50 text-center mt-3 mb-5">Register as a Seller</p>
        <div className="d-flex justify-content-between align-items-center mx-auto p-1">
          <input
            placeholder="Enter Your Email"
            className="bg-transparent border-0 text-white ps-1 w-100"
          />
          <Button className="custom-btn-color m-0">Register</Button>
        </div>
      </Container>
    </div>
  );
}

export default Subscribe;