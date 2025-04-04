import { useEffect, useState } from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ContactMeMain = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show button when near bottom of page
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const totalHeight = document.body.scrollHeight;

      if (scrolled >= totalHeight - 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 relative"
    >
      {/* Heading */}
      <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>

      {/* Contact Section */}
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>

      {/* Scroll to Top Button (Only shows near bottom) */}
      {showScroll && (
        <a
          href="#top"
          className=" fixed bottom-73 max-sm:bottom-55 right-6 bg-cyan text-white p-4  rounded-full shadow-lg hover:bg-dark-cyan transition duration-800 z-50  border bg-transparent to-orange border-orange"
          title="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="w-6 h-4" />
        </a>
      )}
    </div>
  );
};

export default ContactMeMain;
