import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<div className="d-flex flex-column align-items-center justify-content-center">
				<h1>Página no encontrada</h1>
				<Link to="/firebase">Volver a Home</Link>
			</div>
		</>
	);
};

export default NotFound;
