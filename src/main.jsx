import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import Content from "./routes/Content";
import RootLayout from "./routes/RootLayout";
import ProjectDetails from "./routes/ProjectDetails.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import "./index.css";

const router = createHashRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Content />,
				children: [
					{
						path: "/project/:projectId",
						element: <ProjectDetails />,
					},
				],
			},
		],
	},
	{ path: "/*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
