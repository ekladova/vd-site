import React from "react";
import home from "../../images/home.jpg";
import about from "../../images/about.png";
import game from "../../images/game.png";

import "./mockup.css";

const Mockups = () => {
  return (
    <>
      <section className="mockup-section">
        <div className="header-container">
          <h2 className="h2-header">Mockups</h2>
        </div>
        <div className="mockup-container">
          <div>
            <img className="mockup" src={home} alt="home page" />
            <p>Home page</p>
          </div>
          <div className="col">
            <div>
              <img className="mockup-small" src={about} alt="home page" />
              <p>About page</p>
            </div>
            <div>
              <img className="mockup-small" src={game} alt="home page" />
              <p>Game page</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Mockups;
