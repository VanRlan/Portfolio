import React from "react";
import "../partials/footer.css";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer className="footer">
      <div className="container">
            <div className="row">
                <div className="footer-col-4">
                    <h3>Follow Me</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="copyright">Copyright 2022 - Van Rlan</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;