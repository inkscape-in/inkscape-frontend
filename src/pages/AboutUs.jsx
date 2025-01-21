import React from "react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  const handleWhatsAppClick = () => {
    // WhatsApp message
    const message = "Hi";
    const phoneNumber = "917908223657"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
    <div className="pb-10 bg-[#FFFCF0] ">
      <Navbar/>
    </div>
    <div
      style={{
        backgroundColor: "#FFFCF0",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "2rem"
      }}
    >
      <section
        className="bg-white rounded-lg shadow-lg py-12 px-8"
        style={{ maxWidth: "800px", width: "90%" }}
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Inkscape, we believe in turning creativity into reality. Whether
          it’s custom apparel, unique artwork, or personalized event designs,
          we bring your ideas to life with passion and precision.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our mission is to help you express your story, your way. From
          handcrafted portraits to event-specific merchandise, every design is
          tailored to meet your needs and make your moments memorable.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Whether you’re looking for thoughtful gifts, bespoke designs, or
          creative event solutions, Inkscape is your trusted partner in adding
          a personal touch to everything you cherish.
        </p>
        <div className="text-center mt-8">
          <button
            onClick={handleWhatsAppClick}
            className="px-6 py-3 bg-red-700 text-white rounded-md font-semibold shadow-md hover:bg-red-800 transition duration-200"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
