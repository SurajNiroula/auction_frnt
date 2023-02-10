import React from "react";
import main from "../assets/images/logooo.png";
import Wrapper from "../assets/wrapper/LandingPage";
import "../index.css";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Online <span>Auction</span>
          </h1>
          <p>k cha kta kti ho</p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='online auction' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
