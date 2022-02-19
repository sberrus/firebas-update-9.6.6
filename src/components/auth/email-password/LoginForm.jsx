import React, { useState } from "react";

//La libreria firebase/auth nos provee de los metodos necesarios para poder interactuar con esta caracteristica.
//Es necesario inicializar la app antes de utlizar sus métodos.
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const LoginForm = ({ initRegisterForm, initForgotPassword }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Primero se tiene que inicializar la app en la raiz de la app o donde se vaya a utilizar la misma.
	//getAuth() nos permite acceder a la instancia de auth con todas las utilidades que nos permiten interactuar con la mismas.
	const auth = getAuth();

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const login = (e) => {
		e.preventDefault();
		//Ya configurada la app e instanciado getAuth() podemos acceder a los métodos para trabajar con sus componentes.
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				console.log(userCredentials);
			})
			.catch((error) => {
				console.log(error.code);
				console.log(error.message);
			});
	};
	return (
		<div className="col-6 m-auto">
			<h2>Iniciar Sesión</h2>
			<hr />
			<button
				className="btn btn-success mb-3"
				onClick={() => {
					initRegisterForm();
				}}
			>
				<small>
					<b>Registrate!</b>
				</small>
			</button>
			<form>
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
					<a href="#"
						onClick={(e) => {
							e.preventDefault();
							initForgotPassword();
						}}
					>
						<small>¿Olvidaste la contraseña?</small>
					</a>
				</div>

				<button type="submit" className="btn btn-primary" onClick={login}>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
