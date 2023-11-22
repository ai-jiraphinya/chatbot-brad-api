import React, { useState, useEffect } from "react";
import { BiSolidArrowToTop } from "react-icons/bi";

export default function ButtonBackTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Function to show or hide buttons based on scrollY
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add an event listener to hear scroll changes
    window.addEventListener("scroll", handleScroll);

    // Delete the event listener when the component is no longer used
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <React.Fragment>
      {showButton && (
        <div
          className='button-to-top'
          onClick={scrollToTop}
        >
          <BiSolidArrowToTop />
        </div>
      )}
    </React.Fragment>
  );
}
