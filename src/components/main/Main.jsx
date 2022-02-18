import React from "react";
import { Link, useLocation } from "react-router-dom";
import authImg from "../../statics/img/auth.svg";

const Main = () => {
	const { pathname } = useLocation();
	return (
		<main>
			<h1>Recursos a Repasar</h1>
			<hr />
			<div className="row">
				<div className="col-3">
					<div className="card bg-dark text-light">
						<img src={authImg} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Auth</h5>
							<p className="card-text">Aprendiendo a usar Auth en proyectos de React</p>
							<Link to={`${pathname}/auth`} className="btn btn-primary">
								Ir a Auth
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
