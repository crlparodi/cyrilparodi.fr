import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"

/* SERVICES */
import registerServiceWorker from "./registerServiceWorker"

/* COMPONENTS */
import Root from "./pages/Root"

/* STYLES */
import "styles/index.scss"
import "foundation-sites/scss/foundation.scss"

ReactDOM.render(
	<HashRouter>
		<Root />
	</HashRouter>,
	document.getElementById("root"),
)

registerServiceWorker()
