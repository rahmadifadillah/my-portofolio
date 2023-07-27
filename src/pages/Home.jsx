import React from "react";
import Loader from "../components/loaderHome/Loader";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Work from "../components/work/Work";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
