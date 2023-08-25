import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import nprogress from "nprogress";
import Nav1 from "./components/Nav1";
import Nav2 from "./components/Nav2";
import Nav3 from "./components/Nav3";

// const routes = [
//   {
//     title: "Home",
//     path: "/",
//     exact: true,
//     element: nav1,
//   },
//   {
//     title: "About",
//     path: "/nav2",
//     exact: false,
//     element: nav2,
//   },
//   {
//     title: "About2",
//     path: "/nav3",
//     exact: false,
//     element: nav3,
//   },
// ];

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
      <Route exact path="/" element={<Nav1 />} />
      <Route exact path="/nav2" element={<Nav2 />} />
      <Route exact path="/nav3" element={<Nav3 />} />
      {/* <Route path="" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<NotFoundPage />} /> */}
    </Routes>
  );
}
