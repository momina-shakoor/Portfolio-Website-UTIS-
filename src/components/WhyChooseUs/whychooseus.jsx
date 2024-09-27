import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Professional Staff",
    icon: "👨‍💼", // Replace with your icons or images
  },
  {
    title: "24/7 Support",
    icon: "🕒", // Replace with your icons or images
  },
  {
    title: "Premium Backup and Recovery",
    icon: "🔄", // Replace with your icons or images
  },
  {
    title: "Secure System",
    icon: "🔒", // Replace with your icons or images
  },
];

const WhyChooseUs = () => {
  return (
    <div className="p-4 lg:p-8 bg-blue-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="text-center mb-8">
        <p className="text-lg font-medium">
          We Are Here to Grow Your Business Exponentially
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {" "}
        {/* Flex container with reduced gap */}
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="relative bg-blue-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            initial={{ opacity: 1, width: "150px" }}
            whileHover={{ width: "250px" }}
            transition={{ duration: 0.3 }}
            style={{ height: "150px" }} // Ensure consistent height
          >
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <div className="text-5xl">{reason.icon}</div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-blue-800 transition-opacity duration-300 opacity-0 hover:opacity-100">
              <h3 className="text-xl font-semibold text-white">
                {reason.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
