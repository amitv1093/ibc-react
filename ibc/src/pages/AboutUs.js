import React from "react";
import PropTypes from "prop-types";
import "../components/IbcFeatures/IbcFeatures"
import Boxes from "../components/IbcFeatures/IbcFeatures";
import IbcFeatures from "../components/IbcFeatures/IbcFeatures";
import { useNavigate } from "react-router-dom";


export default function AboutUs(props) {

  const navigate = useNavigate();
  const navigateToContactUs = () => {
    navigate('/react/ContactUs')
  };

  return (
    <>
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <h1 id="aboutus" className="mt-16 text-4xl font-bold tracking-tight text-gray-900 text-center border-b-4 border-black ">
            ABOUT US
          </h1>
          <p className="text-base mt-5">
            IGNITE BUSINESS Calayst (IBC) is a team with many years of experience in
            comprehensive support of companies in the area of selection and
            recruitment of talented personnel. We are expert in training employee to
            increase the technical skills, knowledge, productivity and efficiency to
            perform a task in a much better way.
          </p>
        </div>



        <div className="sm:flex items-center max-w-screen-2xl m-auto">

          <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              <img src="https://i.imgur.com/WbQnbas.png" />
            </div>
          </div>
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <div>
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl">01. <span className="text-indigo-600">Mission</span>
                </h2>
                <p className="text-gray-700">
                  It is our mission to collaborate, coach & compete.
                </p>
              </div>

              <div>
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">02. <span className="text-indigo-600">Vision</span>
                </h2>
                <p className="text-gray-700">
                  We want to change the perception of an industry to hire a talented resource rather than qualified resource.
                </p>
              </div>

              <div>
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">03. <span className="text-indigo-600">Value</span>
                </h2>
                <p className="text-gray-700">
                  Innovative Creative Transparency & Integrity
                </p>
              </div>

            </div>
          </div>
        </div>



        <div className="bg-gray-200 flex h-100   mx-auto max-w-15xl px-2 sm:px-6 lg:px-8   flex-col items-center mt-10">
          <IbcFeatures />
        </div>





        <div className="bg-white-200 flex justify-center  mx-auto max-w-15xl px-2 sm:px-6 lg:px-8   flex-col items-center mt-10">
          <h1 id="ourclients" className="text-4xl font-bold mb-4 mt-3">OUR CLIENTS</h1>





        </div>




        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <h1 id="what" className="text-4xl font-bold mb-4 mt-12">WHAT WE CAN DO FOR YOUR BUSINEES</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={navigateToContactUs}>
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
}

AboutUs.propTypes = {};


