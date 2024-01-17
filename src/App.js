import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Reviews from "./pages/Reviews";
import Footer from "./pages/Footer";
import Trending from "./pages/Trending";
import Header from "./pages/Header";
import Listings from "./pages/Listings";
import Subscribe from "./pages/Subscribe";
import Blogs from "./pages/Blogs";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Header />
        <AboutUs />
        <Trending />
        <Listings />
        <Blogs />
        <FAQs />
        <Reviews />
        <Subscribe />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
