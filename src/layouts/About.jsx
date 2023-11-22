import React from "react";

export default function About({ LandingAbout }) {
  return (
    <React.Fragment>
      <div className='wrapper-content-about'>
        <div className='hero-landing'>
          <img src={LandingAbout} alt='landing-about' />
        </div>
        <div className='content-hero self-start lg:self-center lg:w-[700px]'>
          <h1 className='uppercase font-bold text-xl sm:text-3xl lg:text-5xl mb-2'>
            About Trav<span className='text_orange'>bot</span>
          </h1>
          <p className='text-xs sm:text-lg lg:text-xl mb-5 sm:mb-8'>
            Travbot is an ai chatbot that is used to help find recommendations
            for tourist destinations in the Bandung area. The API of this
            chatbot is supported by mr.ibnu sina wardy and mr.samuel from the
            smkdev community as a coding challenge through this Travbot project.
          </p>
          <button onClick={() => window.open("https://www.smk.dev/tgg")} className="about_button_smkdev">
            Join SMKDEV Community
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
