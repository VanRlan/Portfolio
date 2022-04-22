import React from "react";
import "../partials/landing.css";
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const Landing = () => {
  return (
    <>
    <Loader />
    <main>
        <div className="landingPageContainer">
          <header className="introduction">
            <h1>Van's Portfolio</h1>
            <p><strong>Welcome!</strong></p>
            <p>Click on the button to begin the tour :)</p>
            <div className="arrows">
                <div className="posterArrow arrow1"></div>
                <div className="posterArrow arrow2"></div>
                <div className="posterArrow arrow3"></div>
            </div>
            <Link to="/home" className="landingStartButton">
              <img src="../img/IMG_9439.JPG" alt="" />
            </Link>
          </header>
        </div>
    </main>
    </>
  );
};

export default Landing;
