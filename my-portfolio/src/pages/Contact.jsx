import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../partials/contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div class="contact">
        <div class="container-two">
          <div class="formBx">
            <form>
              <h2>Contact Me</h2>
              <div class="inputBox">
                <label for="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  required="required"
                />
              </div>
              <div class="inputBox">
                <label for="emailAddress">Email Address</label>
                <input
                  type="email"
                  id="emailAddress"
                  name="email"
                  required="required"
                />
              </div>
              <div class="inputBox">
                <label for="message">Type Your Message Here...</label>
                <textarea
                  id="message"
                  name="commentArea"
                  required="required"
                ></textarea>
              </div>
              <div class="inputBox">
                <input type="submit" value="Send" name="submit" />
              </div>
            </form>
          </div>
          <div class="imgBx">
            <img
              src="https://freepngimg.com/thumb/anime/118756-jotaro-png-file-hd.png"
              alt="Jotaro-Kujo"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
