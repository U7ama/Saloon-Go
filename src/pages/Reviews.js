import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";

function Reviews() {
  return (
    <div className="reviews">
      <div className="container-fluid">
        <AnimationTitles title="Reviews" className="title mx-auto" />
        {/* <p className="gray-50 text-center mb-5">
          The value of real estate can be affected by its utility, project, and
          demand.{" "}
        </p> */}

        <motion.div
          initial={{ x: 80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className="mySwiper overflow-none"
            spaceBetween={50}
            grabCursor={true}
            slidesPerView={4}
            autoplay={{
              delay: 3000, // Delay between slides in milliseconds (default: 3000)
              disableOnInteraction: false, // Keep autoplay running even after user interaction
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              1298: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/reviews/logo-07.png")}
                  alt="img"
                />
                <h6 className="text-white m-0">Great</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/reviews/logo-08.png")}
                  alt="img"
                />
                <h6 className="text-white m-0">Good</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/reviews/logo-09.png")}
                  alt="img"
                />
                <h6 className="text-white m-0">Excellent</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/reviews/logo-10.png")}
                  alt="img"
                />
                <h6 className="text-white m-0">Home Partners of World</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/reviews/logo-11.png")}
                  alt="img"
                />
                <h6 className="text-white m-0">Red Oak Realty</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/reviews/logo-13.png")}
                  alt="img"
                />
                <h6 className="text-white m-0">American Home Agents</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/reviews/logo-12.png")}
                  alt="img"
                />
                <h6 className="text-white m-0">UA real estate agency</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}

export default Reviews;
