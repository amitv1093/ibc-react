import React from "react";
import PropTypes from "prop-types";
import c from "../assests/images/c-programming.png";
import asp from "../assests/images/asp.png";
import java from "../assests/images/java.png";
import sql from "../assests/images/sql.png";
import ui from "../assests/images/UI.png";
import ServicesProvide from "../components/ServicesProvide/ServicesProvide";
import { useNavigate } from "react-router-dom";




export default function Services(props) {

  const navigate = useNavigate();
  const navigateToContactUs = () => {
    navigate('/ContactUs')
  };

  return (
    <>

      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

        <ServicesProvide />
        <div className="row1">
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <h1 id="aboutus" className="mt-20 text-4xl font-bold tracking-tight text-gray-900 text-center border-b-4 border-black ">PROGRAMMING</h1>
          </div>
        </div>


        <div className="container-fluid prg holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-11 gap-6 space-x-6 ">

          <div className="box-icon-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <div className="box-icon-top">
              <img src={c} className="ico mt-4 " />
              <h4 className="pt-6 mt-3 font-bold tracking-tight"><span className="box-icon-typo">C</span>C Language</h4>
            </div>
            <p>
              Basic of Pop, Conditions, Loops,Array, Function, Pointers, String, Structure.
            </p>
          </div>


          <div className="box-icon-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <div className="box-icon-top">
              <img src={asp} className="ico mt-4 " />
              <h4 className="pt-6 mt-3 font-bold tracking-tight"><span className="box-icon-typo">N</span>.NET</h4>
            </div>
            <p>
              Console Application, Windows, ADO.net, ASP.net, Window Service, Web Service, WCF, REST &amp;
              MVC
              5.
            </p>
          </div>

          <div className="box-icon-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <div className="box-icon-top">
              <img src={java} className="ico mt-4 " />
              <h4 className="pt-6 mt-3 font-bold tracking-tight"><span className="box-icon-typo">J</span>Java</h4>
            </div>
            <p>
              Core Java, Adv Java
            </p>
          </div>



          <div className="box-icon-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <div className="box-icon-top">
              <img src={sql} className="ico mt-4 " />
              <h4 className="pt-6 mt-3 font-bold tracking-tight"><span className="box-icon-typo">D</span>Data Base</h4>
            </div>
            <p>
              Sql Server 2005 DDL DML
            </p>
          </div>


          <div className="box-icon-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <div className="box-icon-top">
              <img src={ui} className="ico mt-4 " />
              <h4 className="pt-6 mt-3 font-bold tracking-tight"><span className="box-icon-typo">U</span>UI / UX </h4>
            </div>
            <p>
              HTML5 , CSS3 , Java Script , Jquery , Angular JS.
            </p>
          </div>


        </div>





        <div className="row1">
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <h1 id="aboutus" className="mt-20 text-4xl font-bold tracking-tight text-gray-900 text-center border-b-4 border-black ">COMMUNICATION SKILLS</h1>
          </div>
        </div>

        <div className="row2 holder mx-auto w-10/12 space-x-6 pt-6 grid grid-cols-1  gap-6  mt-11  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 items-center">
          <div className="col-md-4" data-aos="flip-left">
            <div className="box-icon-1 padding-none">
              <div className="box-icon-top">

                <h4 className='pt-6 mt-3 font-bold tracking-tight'><span className="box-icon-typo">V</span>Verbal Communication</h4>
              </div>

            </div>
          </div>
          <div className="col-md-4" data-aos="flip-up">
            <div className="box-icon-1">
              <div className="box-icon-top">

                <h4 className='pt-6 mt-3 font-bold tracking-tight'><span className="box-icon-typo">B</span>Body Language</h4>
              </div>

            </div>
          </div>
          <div className="col-md-4" data-aos="flip-right">
            <div className="box-icon-1">
              <div className="box-icon-top">

                <h4 className='pt-6 mt-3 font-bold tracking-tight'><span className="box-icon-typo">W</span>Writing</h4>
              </div>

            </div>
          </div>



          <div className="col-md-4" data-aos="flip-left">
            <div className="box-icon-1 padding-none">
              <div className="box-icon-top">

                <h4 className='pt-6 mt-3 font-bold tracking-tight'><span className="box-icon-typo">P</span>Presentation Skills</h4>
              </div>

            </div>
          </div>
          <div className="col-md-4" data-aos="flip-up">
            <div className="box-icon-1">
              <div className="box-icon-top">

                <h4 className='pt-6 mt-3 font-bold tracking-tight'><span className="box-icon-typo">P</span>Public Speaking</h4>
              </div>

            </div>
          </div>
          <div className="col-md-4" data-aos="flip-right">
            <div className="box-icon-1">
              <div className="box-icon-top">

                <h4 className='pt-6 mt-3 font-bold tracking-tight'><span className="box-icon-typo">E</span>Email Etiquettes</h4>
              </div>

            </div>
          </div>

        </div>




        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-28">
          <h1 id="what" className="text-4xl font-bold mb-4">WHAT WE CAN DO FOR YOUR BUSINEES</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10" onClick={navigateToContactUs}>
            CONTACT US
          </button>
        </div>
      </div>
    </>


  )
}




Services.propTypes = {};