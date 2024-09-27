import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Using React Icons for the arrow icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the scroll-to-top button
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300"
        >
          <FaArrowUp size={24} />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
