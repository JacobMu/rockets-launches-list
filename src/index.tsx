import React from "react";
import ReactDOM from "react-dom";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { App } from "./App";
import "./App.scss";
import i18Next from "./i18/initializeI18Service";

const initializeApp = (): void => {
	initializeIcons();
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById("root")
	);
};
initializeApp();

i18Next.on("languageChanged", () => {
	initializeApp();
});
