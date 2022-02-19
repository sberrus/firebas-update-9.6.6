import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = ({ email = "" }) => {
	const [recoveryEmail, setRecoveryEmail] = useState("");

	useEffect(() => {
		if (email) {
			setRecoveryEmail(email);
		}

		return () => {};
	}, []);

	const auth = getAuth();
	const navigate = useNavigate();

	const enviarEmailRecuperacionPassword = (e) => {
		e.preventDefault();
		sendPasswordResetEmail(auth, recoveryEmail)
			.then((payload) => {
				navigate("/firebase/auth")
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="col-6 m-auto">
			<form onSubmit={enviarEmailRecuperacionPassword}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Dirección de correo electrónico
					</label>
					<input
						type="recoveryEmail"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={recoveryEmail}
						onChange={(e) => {
							setRecoveryEmail(e.target.value);
						}}
					/>
					<div id="emailHelp" className="form-text">
						Se te enviará un correo informando que eres rolo de vago
					</div>
				</div>
				<button type="submit" className="btn btn-primary">
					Enviar correo de recuperación
				</button>
			</form>
		</div>
	);
};

export default ForgotPasswordForm;
