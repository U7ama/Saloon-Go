// Import bootstrap react components
import { Button, Card, Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Listings() {
  return (
    // Start properties
    <div className="properties">
      <Container>
        <AnimationTitles className="title mx-auto" title="Featured Listing" />

        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 3,
              },
              1198: {
                slidesPerView: 3,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/saloon1.jpeg")}
                    />
                  </div>
                  <div className="d-flex justify-content-center w-100 mt-3 mb-2">
                    <Button variant="primary ms-0" className="custom-btn-color">
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/saloon12.jpeg")}
                    />
                  </div>
                  <div className="d-flex justify-content-center w-100 mt-3 mb-2">
                    <Button variant="primary ms-0" className="custom-btn-color">
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/saloon2.jpeg")}
                    />
                  </div>
                  <div className="d-flex justify-content-center w-100 mt-3 mb-2">
                    <Button variant="primary ms-0" className="custom-btn-color">
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/saloon4.jpeg")}
                    />
                  </div>
                  <div className="d-flex justify-content-center w-100 mt-3 mb-2">
                    <Button variant="primary ms-0" className="custom-btn-color">
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/saloon4.jpeg")}
                    />
                  </div>
                  <div className="d-flex justify-content-center w-100 mt-3 mb-2">
                    <Button variant="primary ms-0" className="custom-btn-color">
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/saloon2.jpeg")}
                    />
                  </div>
                  <div className="d-flex justify-content-center w-100 mt-3 mb-2">
                    <Button variant="primary ms-0" className="custom-btn-color">
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/saloon2.jpeg")}
                    />
                  </div>
                  <div className="d-flex justify-content-center w-100 mt-3 mb-2">
                    <Button variant="primary ms-0" className="custom-btn-color">
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/saloon2.jpeg")}
                    />
                  </div>
                  <div className="d-flex justify-content-center w-100 mt-3 mb-2">
                    <Button variant="primary ms-0" className="custom-btn-color">
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        {/* End cards */}
      </Container>
    </div>
    // End properties
  );
}

export default Listings;
