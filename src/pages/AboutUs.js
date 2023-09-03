import React from "react";
import PropTypes from "prop-types";

function AboutUs(props) {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900 text-left border-b-4 border-black">
        About us
      </h2>
      <p className="text-base mt-5">
        IGNITE BUSINESS Calayst (IBC) is a team with many years of experience in
        comprehensive support of companies in the area of selection and
        recruitment of talented personnel. We are expert in training employee to
        increase the technical skills, knowledge, productivity and efficiency to
        perform a task in a much better way.
      </p>
    </div>
  );
}

AboutUs.propTypes = {};

export default AboutUs;
