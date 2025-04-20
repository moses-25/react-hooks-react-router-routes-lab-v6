import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Directors from "./components/Directors";
import Actors from "./components/Actors";
import Movie from "./components/Movie";


const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />,
  },
];

export default routes;