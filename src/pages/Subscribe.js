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
        <div className="subscribe_div">
          <div className="mx-auto p-1 mt-2">
            <input
              placeholder="First Name"
              className="bg-transparent border-0 text-white ps-1 w-100"
            />
          </div>
          <div className="mx-auto p-1 mt-2">
            <input
              placeholder="Last Name"
              className="bg-transparent border-0 text-white ps-1 w-100"
            />
          </div>
        </div>
        <div className="subscribe_div">
          <div className="mx-auto p-1 mt-2">
            <input
              placeholder="Email"
              className="bg-transparent border-0 text-white ps-1 w-100"
            />
          </div>
          <div className="mx-auto p-1 mt-2">
            <input
              placeholder="Phone No"
              className="bg-transparent border-0 text-white ps-1 w-100"
            />
          </div>
        </div>
        <div className="subscribe_div">
          <div className="mx-auto p-1 mt-2">
            <input
              placeholder="Password"
              className="bg-transparent border-0 text-white ps-1 w-100"
            />
          </div>
          <div className="mx-auto p-1 mt-2">
            <input
              placeholder="Confirm Password"
              className="bg-transparent border-0 text-white ps-1 w-100"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Button className="custom-btn-color m-0">Register</Button>
        </div>
      </Container>
    </div>
  );
}

export default Subscribe;
