import React from "react";
import "../partials/footer.css";
// import * as AiIcons from "react-icons/ai";
// import * as FaIcons from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-4">
              <h3>Follow Me</h3>
              <ul>
                <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/van.rlan.986/"
                >
                <img src="/img/facebook-icon.png" alt="facebookIcon"/></a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/VanTheAnimeMan"
                  >
                  <img src="/img/twitter-icon.png" alt="twitterIcon" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/van-rlan/"
                  >
                  <img src="/img/linkedin-icon.webp" alt="linkedInLogo" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/vantheanimeman/"
                  >
                  <img src="/img/instagram-logo.png" alt="intagramLogo" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright 2022 - Van Rlan</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
