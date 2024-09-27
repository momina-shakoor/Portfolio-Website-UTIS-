import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Network Services",
    description:
      "Network Installation, Maintenance, and Expansion. LAN and WAN Setup, Reliable Network Attached Storage. Server Management, Virtualization, RouterOS Implementation for Enhanced Connectivity.",
    icon: "🔧",
  },
  {
    title: "IT Maintenance and Support",
    description:
      "Comprehensive support which includes hardware repair, equipment maintenance, component diagnose and troubleshooting. Instant Remote Assistance, troubleshooting and support.",
    icon: "🛠️",
  },
  {
    title: "Security Solutions",
    description:
      "Virus prevention, detection and malware defense. Active Directory Management, Policy enforcement, user account control and Security administration. CCTV Installation, Maintenance, Biometric Attendance integration services.",
    icon: "🔒",
  },
  {
    title: "Data Management and Recovery",
    description:
      "Data recovery, file restoration solutions. Daily backup solutions and Data management. Centralized and Secure data storage and data archiving.",
    icon: "💾",
  },
  {
    title: "Web Development",
    description:
      "Expert Website Development HTML/CSS, JavaScript, PHP. Responsive Web Design, cross-browser compatibility, User-Centric approach, and innovative designs.",
    icon: "🌐",
  },
  {
    title: "Hosting and Server Solutions",
    description:
      "Providing comprehensive hosting services with virtual server, compatible storage and processing speed.",
    icon: "☁️",
  },
];

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 lg:p-8 ">
      <h2 className="text-3xl text-white font-bold text-center mb-8">
        Our Services
      </h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="px-2">
            <div className="card bg-white border border-gray-200 rounded-lg shadow-card h-64 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="card-container relative w-full h-full">
                <div className="card-face front-face absolute w-full h-full flex flex-col justify-center items-center bg-white p-4 rounded-lg">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-1">
                    {service.title}
                  </h3>
                </div>
                <div className="card-face back-face absolute w-full h-full flex flex-col justify-center items-center bg-white p-4 rounded-lg transform rotateY-180">
                  <p className="text-sm text-gray-700">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
