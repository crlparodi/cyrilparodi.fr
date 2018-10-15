import React from "react"
import ReactDOM from "react-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./components/Home"
import Banner from "./components/Banner"

import registerServiceWorker from "./registerServiceWorker"

import "./styles/index.css"

ReactDOM.render(<Header />, document.getElementById("header"))
ReactDOM.render(<Banner />, document.getElementById("banner"))
ReactDOM.render(<Home />, document.getElementById("home"))
ReactDOM.render(<Footer />, document.getElementById("footer"))

registerServiceWorker()
