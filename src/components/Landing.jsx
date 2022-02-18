import React from "react";
import { Link, Outlet } from "react-router-dom";

const Landing = () => {
	return (
		<div className="h-100">
			<div className="d-flex flex-column align-items-center justify-content-center h-100">
				<h1>Firebase 9.6.6 update</h1>
				<Link to="/firebase" className="btn btn-outline-light mt-3">
					Empezar 💪
				</Link>
			</div>
			<Outlet />
		</div>
	);
};

export default Landing;
