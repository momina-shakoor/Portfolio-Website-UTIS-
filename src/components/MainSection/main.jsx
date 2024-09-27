import React from "react";
import ParticlesComponent from "../particles";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div className="relative flex items-center justify-center h-[80vh] font-montserrat">
      <ParticlesComponent id="particles" />
      <div className="absolute text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-semibold animate-fadeIn">
          UNITECH IT SOLUTIONS
        </h1>
        <h2 className="text-2xl md:text-4xl mt-2 md:mt-4 animate-fadeIn delay-1s">
          Empowering your Digital Success with Innovative IT Solutions
        </h2>
        <nav className="mt-6 md:mt-8 animate-fadeIn delay-2s">
          <ul className="flex flex-col md:flex-row justify-center text-base md:text-lg">
            <li className="border-b md:border-r md:border-b-0 border-white px-2 md:px-4 py-2 md:py-0">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="hover:font-semibold transition-transform transform hover:scale-110"
              >
                Services
              </Link>
            </li>
            <li className="border-b md:border-r md:border-b-0 border-white px-2 md:px-4 py-2 md:py-0">
              <Link
                to="packages"
                smooth={true}
                duration={500}
                className="hover:font-semibold transition-transform transform hover:scale-110"
              >
                Packages
              </Link>
            </li>
            <li className="border-b md:border-r md:border-b-0 border-white px-2 md:px-4 py-2 md:py-0">
              <Link
                to="clients"
                smooth={true}
                duration={500}
                className="hover:font-semibold transition-transform transform hover:scale-110"
              >
                Clients
              </Link>
            </li>
            <li className="px-2 md:px-4 py-2 md:py-0">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:font-semibold transition-transform transform hover:scale-110"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Main;
