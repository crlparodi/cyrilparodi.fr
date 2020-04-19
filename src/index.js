import React from "react";
import ReactDOM from "react-dom";

/* SERVICES */
import registerServiceWorker from "./registerServiceWorker";

/* COMPONENTS */
import Root from "./navigation/Root";

/* STYLES */
import "styles/index.scss";

const switchTheme = (darkToggle) => {
	if (darkToggle) {
		document.documentElement.setAttribute("theme", "theme-dark");
	} else {
		document.documentElement.setAttribute("theme", "theme-light");
	}
};

document.documentElement.setAttribute("theme", "theme-light");
ReactDOM.render(<Root switchTheme={switchTheme.bind(this)} />, document.getElementById("root"));

registerServiceWorker();
