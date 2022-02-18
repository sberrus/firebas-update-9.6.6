import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const EmailPassword = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const auth = getAuth();

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const login = (e) => {
		e.preventDefault();
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
		<div className="row">
			<div className="col-4 m-auto">
				<form onSubmit={login}>
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
					<div className="mb-3 form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1" />
						<label className="form-check-label" htmlFor="exampleCheck1">
							Check me out
						</label>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default EmailPassword;
