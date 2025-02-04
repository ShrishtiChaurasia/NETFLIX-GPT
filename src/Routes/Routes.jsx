import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{}],
  },
]);

export default appRoutes;
