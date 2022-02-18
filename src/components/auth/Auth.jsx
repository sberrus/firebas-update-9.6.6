import React from "react";
import { Link, useLocation } from "react-router-dom";
import EmailPassword from "../../statics/img/email-password.svg";

const Auth = () => {
	const { pathname } = useLocation();
	return (
		<>
			<h1>Auth Service</h1>
			<hr />
			<div className="row">
				<div className="col-4">
					<div className="card bg-dark text-light">
						<img src={EmailPassword} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Logeo con email y contraseña</h5>
							<p className="card-text">Iniciar sesión con email y contraseña</p>
							<Link to={`${pathname}/email-password`} className="btn btn-primary">
								Ir a clase
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Auth;
