import React from "react";
import ReactDOM from "react-dom";

//
import { BrowserRouter } from "react-router-dom";

//
import "./index.css";

//
import App from "./App";

//Importamos la configuración de la app de firebase
import "./firebase";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
