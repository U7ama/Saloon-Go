import { Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";

function Trending() {
  return (
    <div className="join">
      <AnimationTitles
        className="title mx-auto mt-5"
        title="Trending Categories"
      />
      <Container>
        <Swiper
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            998: {
              slidesPerView: 3,
            },
            1198: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">1</h4>
            <img
              src={require("../images/saloon8.jpeg")}
              alt="img"
              className="img-fluid w-100 rounded"
            />
            <AnimationTitles
              title="Hair Dressers"
              className="text-white mb-4 mt-5 h4"
            />
            <Button variant="primary ms-0" className="custom-btn-color">
              Discover
            </Button>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">2</h4>
            <img
              className="w-100 rounded"
              src={require("../images/saloon10.jpeg")}
              alt="img"
            />
            <AnimationTitles
              title="Beauty Salons"
              className="text-white mb-4 mt-5 h4"
            />
            <Button variant="primary ms-0" className="custom-btn-color">
              Discover
            </Button>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">3</h4>
            <img
              className="w-100 rounded"
              src={require("../images/saloon9.jpeg")}
              alt="img"
            />
            <AnimationTitles
              title="Ascetics"
              className="text-white mb-4 mt-5 h4"
            />
            <Button variant="primary ms-0" className="custom-btn-color">
              Discover
            </Button>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">4</h4>
            <img
              className="w-100 rounded"
              src={require("../images/spa.jpeg")}
              alt="img"
            />
            <AnimationTitles title="Spa" className="text-white mb-4 mt-5 h4" />
            <Button variant="primary ms-0" className="custom-btn-color">
              Discover
            </Button>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default Trending;
