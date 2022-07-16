import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";

import EditorScreen from "../pages/EditorScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import PostScreen from "../pages/PostScreen";

const RoutesDos = () => {
  return (
    <>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/edit" element={<EditorScreen />} />
        <Route path="/post/:id" element={<PostScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </>
  );
};

export default RoutesDos;
