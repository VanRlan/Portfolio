import React from "react";
import Navbar from "../components/Navbar";
import "../partials/home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import projects from "../data/projects.json";
import Footer from "../components/Footer";
import Loader from '../components/Loader';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setShowLoader(false)
    }, 3000)
    return() => clearTimeout(loadingTimer)
  }, [])

  return (
    <>
    {showLoader && <Loader />}
      <Navbar />
      <div className="van-intro">
        <h3>About Me</h3>
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
            skills but hard and soft skills.
          </p>
          <img src="../img/IMG_9439.JPG" alt="" />
        </div>
      </div>
      <div className="small-container-2">
        <div className="van-row">
          <h1>All Projects</h1>
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
              <div className="col-5" key={key}>
                <Link to={project.link}>
                  <img src={project.img} className="items" alt="pic" />
                </Link>
                <div className="product-details">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <button className="product-btn">Github</button>
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
