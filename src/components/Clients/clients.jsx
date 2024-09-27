import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  { id: 1, logo: "/images/logos/QEP-logo.png" },
  { id: 2, logo: "/images/logos/sk-fashion-logo.jpg" },
  { id: 3, logo: "/images/logos/spice arena logo.jpg" },
  { id: 4, logo: "/images/logos/tasteland logo.jpg" },
  { id: 5, logo: "/images/logos/trs-logo.jpg" },
  { id: 6, logo: "/images/logos/blesso-logo.png" },
  { id: 7, logo: "/images/logos/church logo.jpg" },
  { id: 8, logo: "/images/logos/color wings logo.png" },
  { id: 9, logo: "/images/logos/genx app logo.jpg" },
  { id: 10, logo: "/images/logos/hkb-logo.jpg" },
  { id: 11, logo: "/images/logos/hussain-can-logo.png" },
  { id: 12, logo: "/images/logos/id logix logo.jpg" },
  { id: 13, logo: "/images/logos/Indus-Logo.webp" },
  { id: 14, logo: "/images/logos/knitstich-ogo.jpg" },
  { id: 15, logo: "/images/logos/kuene-logo.jpg" },
  { id: 16, logo: "/images/logos/Maxtech-Logo.png" },
  { id: 17, logo: "/images/logos/NSC logo.png" },
  { id: 18, logo: "/images/logos/palmcity_logo-.png" },
  { id: 19, logo: "/images/logos/parley-logo.jpg" },
  { id: 20, logo: "/images/logos/purefoodcompany-logo.jpg" },
  { id: 21, logo: "/images/logos/Pure-Foods-Company-Logo.png" },
];

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="p-4 lg:p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
      <Slider {...settings}>
        {clients.map((client) => (
          <div key={client.id} className="p-4 flex justify-center">
            <img
              src={client.logo}
              alt={`Client ${client.id}`}
              className="w-40 h-40 object-contain mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clients;
