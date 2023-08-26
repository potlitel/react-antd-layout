import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import nprogress from "nprogress";
import Nav1 from "./components/Nav1";
import Nav2 from "./components/Nav2";
import Nav3 from "./components/Nav3";
import Nav4 from "./components/Nav4";
import Nav5 from "./components/Nav5";
import Home from "./components/Home";
import Nav6 from "./components/Nav6";

export default function Rutas() {
  let location = useLocation();

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  return (
    // <Routes>
    //   {routes.map((route) => (
    //     <Route key={route.path} {...route} />
    //   ))}
    // </Routes>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/nav1" element={<Nav1 />} />
      <Route exact path="/nav2" element={<Nav2 />} />
      <Route exact path="/nav3" element={<Nav3 />} />
      <Route exact path="/nav4" element={<Nav4 />} />
      <Route exact path="/nav5" element={<Nav5 />} />
      <Route exact path="/nav6" element={<Nav6 />} />
      {/* <Route path="" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<NotFoundPage />} /> */}
    </Routes>
  );
}
