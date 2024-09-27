import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+923214299087"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
