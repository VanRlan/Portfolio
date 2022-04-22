import React from "react";
import "../partials/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
      <div className="container">
            <div className="row">
                {/* <div className="footer-col-2">
                    <img src="../img/Mihoyologo.png" alt="Mihoyo"/>
                    <p>Download App for Android and ios mobile phone.</p>
                </div> */}
                {/* <div className="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div> */}
                <div className="footer-col-4">
                    <h3>Follow Me</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
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