import React from "react";
import Navbar from "../Components/navbar";
import Freebook from "../Components/freebook";
import Banner from "../Components/banner";
import Footer from "../Components/footer";
function home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Freebook />
      <Footer />
    </>
  );
}

export default home;
