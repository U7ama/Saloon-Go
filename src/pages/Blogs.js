import { Container, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";
import { Pagination, Navigation } from "swiper/modules";
// const { Container } = require("react-bootstrap");

function Blogs() {
  return (
    <div className="blogs">
      <AnimationTitles className="title mx-auto mt-5" title="Our Blogs" />
      <Container>
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          grabCursor={true}
          loop={true}
          // pagination={{
          //   clickable: true,
          //   dynamicBullets: true,
          // }}
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
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper mt-4"
        >
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <div className="rounded overflow-hidden position-relative">
              <Card.Img
                variant="top"
                alt="img"
                src={require("../images/saloon13.jpg")}
              />
              {/* <i className="fa-regular fa-heart like" onClick={like}></i> */}
            </div>
            <h5 className="mt-2 text-white fw-normal">Cottage</h5>
            <p className="gray-90">Red Oak Realty</p>
            <Button variant="primary ms-0" className="custom-btn-color">
              Read more
            </Button>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <div className="rounded overflow-hidden position-relative">
              <Card.Img
                variant="top"
                alt="img"
                src={require("../images/saloon14.jpg")}
              />
              {/* <i className="fa-regular fa-heart like" onClick={like}></i> */}
            </div>
            <h5 className="mt-2 text-white fw-normal">Cottage</h5>
            <p className="gray-90">Red Oak Realty</p>
            <Button variant="primary ms-0" className="custom-btn-color">
              Read more
            </Button>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <div className="rounded overflow-hidden position-relative">
              <Card.Img
                variant="top"
                alt="img"
                src={require("../images/saloon15.webp")}
              />
              {/* <i className="fa-regular fa-heart like" onClick={like}></i> */}
            </div>
            <h5 className="mt-2 text-white fw-normal">Cottage</h5>
            <p className="gray-90">Red Oak Realty</p>
            <Button variant="primary ms-0" className="custom-btn-color">
              Read more
            </Button>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <div className="rounded overflow-hidden position-relative">
              <Card.Img
                variant="top"
                alt="img"
                src={require("../images/saloon16.jpg")}
              />

              {/* <i className="fa-regular fa-heart like" onClick={like}></i> */}
            </div>
            <h5 className="mt-2 text-white fw-normal">Cottage</h5>
            <p className="gray-90">Red Oak Realty</p>
            <Button variant="primary ms-0" className="custom-btn-color">
              Read more
            </Button>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <div className="rounded overflow-hidden position-relative">
              <Card.Img
                variant="top"
                alt="img"
                src={require("../images/saloon1.jpeg")}
              />

              {/* <i className="fa-regular fa-heart like" onClick={like}></i> */}
            </div>
            <h5 className="mt-2 text-white fw-normal">Cottage</h5>
            <p className="gray-90">Red Oak Realty</p>
            <Button variant="primary ms-0" className="custom-btn-color">
              Read more
            </Button>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <div className="rounded overflow-hidden position-relative">
              <Card.Img
                variant="top"
                alt="img"
                src={require("../images/saloon1.jpeg")}
              />

              {/* <i className="fa-regular fa-heart like" onClick={like}></i> */}
            </div>
            <h5 className="mt-2 text-white fw-normal">Cottage</h5>
            <p className="gray-90">Red Oak Realty</p>
            <Button variant="primary ms-0" className="custom-btn-color">
              Read more
            </Button>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <div className="rounded overflow-hidden position-relative">
              <Card.Img
                variant="top"
                alt="img"
                src={require("../images/saloon1.jpeg")}
              />

              {/* <i className="fa-regular fa-heart like" onClick={like}></i> */}
            </div>
            <h5 className="mt-2 text-white fw-normal">Cottage</h5>
            <p className="gray-90">Red Oak Realty</p>
            <Button variant="primary ms-0" className="custom-btn-color">
              Read more
            </Button>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <div className="rounded overflow-hidden position-relative">
              <Card.Img
                variant="top"
                alt="img"
                src={require("../images/saloon1.jpeg")}
              />

              {/* <i className="fa-regular fa-heart like" onClick={like}></i> */}
            </div>
            <h5 className="mt-2 text-white fw-normal">Cottages</h5>
            <p className="gray-90">Red Oak Realty</p>
            <Button variant="primary ms-0" className="custom-btn-color">
              Read more
            </Button>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default Blogs;
