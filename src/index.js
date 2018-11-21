import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"

import Root from "./pages/Root"

import registerServiceWorker from "./registerServiceWorker"

import "./styles/index.scss"

ReactDOM.render(
	<HashRouter>
		<Root />
	</HashRouter>,
	document.getElementById("root"),
)

registerServiceWorker()
