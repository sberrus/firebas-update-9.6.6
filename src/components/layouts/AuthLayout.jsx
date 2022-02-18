import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	return (
		<main>
			<h1>Auth Service</h1>
			<hr />
			<Outlet />
		</main>
	);
};

export default AuthLayout;
