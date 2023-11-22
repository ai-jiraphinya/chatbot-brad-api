import React from "react";
import { Link } from "react-router-dom";

export default function Hero({ LandingHero }) {
  return (
    <React.Fragment>
      <div className='wrapper-content'>
        <div className='content-hero self-start lg:self-center lg:w-[1000px]'>
          <h1 className='uppercase font-bold text-xl sm:text-3xl lg:text-5xl text_orange mb-2'>
            Welcome to Trav<span>bot</span>
          </h1>
          <p className='text-xs sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:w-[700px]'>
            Start exploring travbot by looking for tourist destinations in
            Bandung for your vacation needs. You can get useful information from
            this travbot. Start pressing the get started button to start asking
            our chatbot.
          </p>
          <Link to='/chatbot' className='start_btn'>
            Get Started
          </Link>
        </div>
        <div className='hero-landing'>
          <img
            src={LandingHero}
            alt='landing-hero'
            className='lg:w-[1000px]'
          />
        </div>
      </div>
    </React.Fragment>
  );
}
