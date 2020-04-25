import React from "react";
import "react-materialize";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const TITLE = "Koompi play | Quiz";

const Home = () => (
  <React.Fragment>
    {/* <NavBar /> */}
    <Helmet>
      <title>{TITLE}</title>
    </Helmet>
    <div id="home">
      <section>
        <h1>Quiz App</h1>
        <div className="play-button-container">
            <ul>
                <li id="button"><Link className="play-button" to="/play/Quiz">Play</Link></li>
            </ul>
        </div>
      </section>
    </div>
  </React.Fragment>
);

export default Home;
