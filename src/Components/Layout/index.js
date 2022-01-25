import React from "react";
import Navbar from "../Common/Navbar";
import Sidebar from "../Common/Sidebar";
import PlayArea from "../Common/PlayArea";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="player_container">
      <Sidebar />
      <div className="main_container">
        <Navbar />
        <div className="app_content layout_padding">{children}</div>
      </div>
      <PlayArea />
    </div>
  );
};

export default Layout;
