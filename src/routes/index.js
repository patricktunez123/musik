import React from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "../config/routes";
import Home from "../views/home";
import Player from "../views/player";
import Error404 from "../views/error404";

const BaseRoutes = () => {
  return (
    <Routes>
      <Route path={appRoutes.Home.url} element={<Home />} />
      <Route path={appRoutes.Player.url} element={<Player />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default BaseRoutes;
