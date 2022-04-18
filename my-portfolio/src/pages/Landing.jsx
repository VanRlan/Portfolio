import React from "react";
import "../partials/landing.css";

const Landing = () => {
  return (
    <>
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
            <button className="landingStartButton">
              <img src="../img/anemo-vision.png" alt="" />
            </button>
          </header>
        </div>
    </main>
    </>
  );
};

export default Landing;
