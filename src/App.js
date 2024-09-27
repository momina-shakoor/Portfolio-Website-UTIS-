import React from "react";
import Main from "./components/MainSection/main";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Packages from "./components/Packages/packages";
import WhyChooseUs from "./components/WhyChooseUs/whychooseus";
import Contact from "./components/ContactUs/contact";
import Footer from "./components/Footer/footer";
import Clients from "./components/Clients/clients";
import ScrollToTop from "./components/Scroll to top/scrollToTop";
import WhatsAppButton from "./components/Whatsapp icon/whatsappIcon";

function App() {
  return (
    <>
      <section id="home">
        <Main />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="packages">
        <Packages />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}

export default App;
