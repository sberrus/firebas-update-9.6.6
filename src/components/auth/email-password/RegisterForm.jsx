import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const RegisterForm = ({ initLoginForm }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const auth = getAuth();

	const registerUser = (e) => {
		e.preventDefault();

		if (password === confirmPassword) {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredentials) => {
					console.log(userCredentials);
				})
				.catch((error) => console.log(error));
			return;
		}
		console.error("El las contraseñas no coinciden");
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
	};

	return (
		<div className="col-6 m-auto">
			<h2>Registrar Usuario</h2>
			<hr />
			<button
				className="btn btn-success mt-3"
				onClick={() => {
					initLoginForm();
				}}
			>
				Volver a Login
			</button>
			<form onSubmit={registerUser}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						value={email}
						onChange={handleEmailChange}
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Confirm Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;
