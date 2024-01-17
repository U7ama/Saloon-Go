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
        <Reviews />
        <Subscribe />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
