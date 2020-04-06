import React from "react"
import ReactDOM from "react-dom"

/* SERVICES */
import registerServiceWorker from "./registerServiceWorker"

/* COMPONENTS */
import Root from "./navigation/Root"

/* STYLES */
import "styles/index.scss"

ReactDOM.render(<Root />, document.getElementById("root"))

registerServiceWorker()
