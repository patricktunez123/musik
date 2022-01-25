import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../config/routes";

const Home = () => {
  return (
    <div className="home_banner">
      <div className="banner_content">
        <h1 className="green_text large_text text_900">
          Listen to your fav music for free! Be happy.
        </h1>
        <Link
          to={appRoutes.Player.url}
          className="musik_btn musik_primary_btn musik_big_btn"
        >
          Open player
        </Link>
      </div>
    </div>
  );
};

export default Home;
