import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../_partials/NavBar";

const MainLayout = () => {
	return (
		<>
			<div className="container">
				<NavBar />
			</div>{" "}
			<hr />
			<div className="container">
				<Outlet />
			</div>
		</>
	);
};

export default MainLayout;
