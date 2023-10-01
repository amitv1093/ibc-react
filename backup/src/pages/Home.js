import React from "react";
import PropTypes from "prop-types";
import logo from "../assests/images/ibc-logo-blue.png";
import AppCarousel from "../components/AppCarousel/AppCarousel";
import Banner from "../components/Banner";

function Home(props) {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <Banner></Banner>
        <div>
          <AppCarousel></AppCarousel>
        </div>
      </div>
      <div className="grid sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
        <div className="bg-black py-5"></div>

        <div className="bg-black py-5"></div>

        <div className="bg-black py-5"></div>
        <div className="bg-black py-5"></div>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
