import React from "react";
import Navbar from "../components/Navbar";
import "../partials/home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import projects from "../data/projects.json";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {showLoader && <Loader />}
      <Navbar />
      <div className="van-intro">
        <h1>About Me</h1>
        <div className="van-aboutMe">
          <p>
            Junior software engineer working my way into a full-stack developer.
            I'm passionate about coding and hoping to one day develop my own RPG
            game using the programming languages I've learned and will learn.
            Currently an apprentice at Road to Hire, where we learn multiple
            programming languages such as Html, Css, Javascript, Node.Js, and
            React. I've also learned professional development skills such as
            public speaking, personal branding, time management, team
            collaboration and to improve my knowledge of not just technical
            skills but hard and soft skills. Hobbies include drawing, playing
            video games, watching anime, exercising and coding.
          </p>
          <img src="../img/IMG_9439.JPG" alt="" />
        </div>
      </div>
      <div className="small-container-2">
        <div className="van-row">
          <h2>All Projects</h2>
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="van-projects-card">
          {projects
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((project, key) => (
              <div className="van-cards" key={key}>
                <a target="_blank" href={project.link}>
                  <img src={project.img} className="items" alt="pic" />
                </a>
                <div className="product-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="github-btn">
                    <a target="_blank" href={project.github} className="product-btn">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
