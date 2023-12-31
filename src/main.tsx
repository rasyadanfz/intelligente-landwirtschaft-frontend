import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routeList from "./routeList";
import { Toaster } from "./components/ui/toaster";

const router = createBrowserRouter(routeList);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<Toaster />
	</React.StrictMode>
);
