import React from "react";

import { getAuth, signOut } from "firebase/auth";

const UserLogged = ({ userLogged }) => {
	const auth = getAuth();

	const handleLogout = () => {
		signOut(auth);
		window.location.reload();
	};

	return (
		<div className="text-center">
			<h5>Usuario Conectado: {userLogged.email}</h5>
			<hr />
			<button className="btn btn-danger mt-3" onClick={handleLogout}>
				Desconectar
			</button>
		</div>
	);
};

export default UserLogged;
