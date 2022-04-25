import React from "react";
import "../partials/loader.css";

const Loader = () => {
  return (
    <>
      <div className="loader">
        <div class="loading-bar" role="presentation" aria-hidden="true">
          <img
            src="/img/genshin-loader.webp"
            alt="Loading..."
          />
        </div>
      </div>
      {/* <div className="loader">
      <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
      </div>
    </div> */}
    </>
  );
};

export default Loader;
