import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../partials/contact.css";

const Contact = () => {
  return (
      <>
      <Navbar />
      <div class="contact">
        <div class="container-two">
            <div class="formBx">
                <form>
                    <h2>Contact Us</h2>
                    <div class="inputBox">
                        <input type="text" id="fullName" name="name" required="required"/>
                        <label for="fullName">Full Name</label>
                    </div>
                    <div class="inputBox">
                        <input type="email" id="emailAddress" name="email" required="required"/>
                        <label for="emailAddress">Email Address</label>
                    </div>
                    <div class="inputBox">
                        <textarea id="message" name="commentArea" required="required"></textarea>
                        <label for="message">Type Your Message Here...</label>
                    </div>
                    <div class="inputBox">
                        <input type="submit" value="Send" name="submit"/>
                    </div>
                </form>
            </div>
            <div class="imgBx">
                <img src="../img/shogun_raiden_genshin_impact_portrait_render_by_deg5270_deqwdhv-fullview.png"
                    alt="Ei Chan :)"/>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact;