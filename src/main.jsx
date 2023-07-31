import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Content from "./routes/Content";
import RootLayout from "./routes/RootLayout";
import ProjectDetails from "./routes/ProjectDetails.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/Portfolio",
    element: <RootLayout />,
    children: [
      {
        path: "/Portfolio",
        element: <Content />,
        children: [
          {
            path: "/Portfolio/project/:projectId",
            element: <ProjectDetails />,
          },
        ],
      },
    ],
  },
  { path: "/Portfolio/*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
