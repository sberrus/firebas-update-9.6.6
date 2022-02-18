import React from "react";
import { Route, Routes } from "react-router-dom";

//Layouts
import MainLayout from "../components/layouts/MainLayout";

//Components
import Auth from "../components/auth/Auth";
import Landing from "../components/Landing";
import Main from "../components/main/Main";
//
import NotFound from "../components/NotFound";
import AuthLayout from "../components/layouts/AuthLayout";
import EmailPassword from "../components/auth/email-password/EmailPassword";

const MainRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="firebase" element={<MainLayout />}>
				<Route index element={<Main />} />
				<Route path="auth" element={<AuthLayout />}>
					<Route index element={<Auth />} />
					<Route path="email-password" element={<EmailPassword />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default MainRouter;
