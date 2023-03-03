import React from "react";
import PropTypes from "prop-types";
import logo from '../assests/images/ibc-logo-blue.png';

function Home(props) {
  return (
    <div className="grid grid-cols-1 place-content-center h-screen p-2 bg-gray-200 grid-coulmns">
      <img
        src={logo}
        title="Ignite Business Catalyst"
        className="logo logo-blue mx-auto mb-4"
        alt="Ignite Business Catalyst"
      />
       <h1 style={{color:"#000"}}> React Version Coming Soon.............</h1>
    </div>
  );
}

Home.propTypes = {};

export default Home;
