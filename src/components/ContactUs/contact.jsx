import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error("Please complete the CAPTCHA.");
      return;
    }

    emailjs
      .sendForm(
        "service_jlv9jnb",
        "template_1ez5f6b",
        form.current,
        "Qfis9G3r2oY4HfgW_"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");

          // Scroll to the top of the page
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          // Optionally, you can reset the form
          form.current.reset();
          setCaptchaValue(null);
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred, please try again.");
        }
      );
  };

  return (
    <div className="p-4 lg:p-6 bg-gray-50 text-gray-800">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="lg:w-1/2 lg:pr-4 mb-6 lg:mb-0">
            <p className="text-md mb-4">
              Need a free quote? Feel free to contact us. You will receive a
              response within 24 hours.
            </p>
            <p className="text-lg font-medium mb-4">
              Call us:{" "}
              <a
                href="tel:+923214299087"
                className="text-blue-600 hover:text-blue-800"
              >
                +923214299087
              </a>
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-4">
                  <ReCAPTCHA
                    sitekey="6LcEpS0qAAAAAJR4mwuvufiqmjklM7Z8zHm3lDGs"
                    onChange={onCaptchaChange}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
