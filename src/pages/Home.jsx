import React, { useEffect, useState } from "react";
import Hero from "../layouts/Hero";
import About from "../layouts/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ButtonBackTop from "../components/ButtonBackTop";
import LandingAbout from "/landing-about.svg";
import LandingHero from "/landing-hero.svg";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const heroImage = new Image();
    const aboutImage = new Image();
  
    heroImage.src = LandingHero;
    aboutImage.src = LandingAbout;
  
    const checkLoadingStatus = () => {
      if (heroImage.complete && aboutImage.complete) {
        setIsLoading(false);
      }
    };
  
    heroImage.addEventListener("load", checkLoadingStatus);
    aboutImage.addEventListener("load", checkLoadingStatus);
  
    return () => {
      heroImage.removeEventListener("load", checkLoadingStatus);
      aboutImage.removeEventListener("load", checkLoadingStatus);
    };
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="wrapper">
          <Navbar />
          <Hero LandingHero={LandingHero} />
          <About LandingAbout={LandingAbout} />
          <Footer />
        </div>
      )}
      <ButtonBackTop />
    </React.Fragment>
  );
}
