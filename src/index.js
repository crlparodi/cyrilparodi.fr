import React from "react"
import ReactDOM from "react-dom"

import Header from "./components/Header"
import Banner from "./components/Banner"
import Footer from "./components/Footer"

import Home from "./pages/Home"

import registerServiceWorker from "./registerServiceWorker"

import "../node_modules/bulma/css/bulma.min.css"
import "./styles/index.css"

ReactDOM.render(<Header />, document.getElementById("header"))
ReactDOM.render(<Banner />, document.getElementById("banner"))
ReactDOM.render(<Footer />, document.getElementById("footer"))

ReactDOM.render(<Home />, document.getElementById("home"))

registerServiceWorker()
