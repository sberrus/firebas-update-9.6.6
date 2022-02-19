import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import UserLogged from "./UserLogged";

const EmailPassword = () => {
	//TODO: 1. Vista y lógica de Login [DONE]
	const [isLogin, setIsLogin] = useState(true);
	const [isRegister, setIsRegister] = useState(false);
	const [isPasswordLost, setIsPasswordLost] = useState(false);
	const [userLogged, setUserLogged] = useState(false);

	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUserLogged(user);
				return;
			}
			console.log("No hay usuario");
		});

		return () => {};
	}, []);

	//todo: Usar estos manejadores para manejar las vistas de los formularios
	const initRegisterForm = () => {
		setIsRegister(true);
		setIsLogin(false);
		setIsPasswordLost(false);
	};
	const initLoginForm = () => {
		setIsLogin(true);
		setIsRegister(false);
		setIsPasswordLost(false);
	};
	const initForgotPassword = () => {
		setIsPasswordLost(true);
		setIsRegister(false);
		setIsLogin(false);
	};

	//TODO: 3. Vista y lógica de Registro
	//TODO: 4. Vista y lógica de Contraseña Perdida
	//TODO: 2. Vista y lógica de Logout

	return userLogged ? (
		<UserLogged userLogged={userLogged} />
	) : (
		<div className="row">
			{isLogin && (
				<>
					<LoginForm initRegisterForm={initRegisterForm} initForgotPassword={initForgotPassword} />
				</>
			)}
			{isRegister && <RegisterForm initLoginForm={initLoginForm} />}
			{isPasswordLost && <ForgotPasswordForm />}
		</div>
	);
};

export default EmailPassword;
