import React from "react";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="font-montserrat bg-white">
      <div className="w-full">
        <ul className="flex flex-col md:flex-row flex-wrap justify-center items-center p-2 text-blue-900 font-medium">
          <li className="p-3 text-xl md:text-2xl">
            <CountUp end={25} duration={2} />+ Years in Business
          </li>
          <li className="p-3 text-xl md:text-2xl">
            <CountUp end={200} duration={2} />+ Satisfied Clients
          </li>
          <li className="p-3 text-xl md:text-2xl">
            <CountUp end={500} duration={2} />+ Successful Projects
          </li>
        </ul>
      </div>
      <div className="p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 bg-white shadow-md rounded-lg">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 hover:text-blue-600">
            About Us
          </h1>
          <p className="text-base md:text-lg mb-3 md:mb-4 transition-transform duration-300 hover:scale-105">
            The Best IT Solutions with more than 25 years of experience
          </p>
          <p className="text-sm md:text-base mb-3 md:mb-4 transition-transform duration-300 hover:scale-105">
            We offer unparalleled IT solutions and support, available 24/7, to
            keep your business at the forefront of the fast-paced, ever-evolving
            world of technology. Our comprehensive solutions are designed to
            bring your business up to date and ahead of the curve.
          </p>
          <ul className="list-disc list-inside mb-3 md:mb-4 space-y-2">
            <li className="text-sm md:text-base transition-colors duration-300 hover:text-blue-600">
              24/7 Support
            </li>
            <li className="text-sm md:text-base transition-colors duration-300 hover:text-blue-600">
              Fair Prices
            </li>
            <li className="text-sm md:text-base transition-colors duration-300 hover:text-blue-600">
              Professional Staff
            </li>
          </ul>
          <p className="text-sm md:text-base font-medium transition-colors duration-300 hover:text-blue-600">
            Call to ask any question:{" "}
            <a
              href="tel:+923214299087"
              className="text-blue-600 hover:underline"
            >
              +923214299087
            </a>
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/AboutUS.avif"}
          alt="About Us"
          className="w-full lg:w-1/2 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default About;
