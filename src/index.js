import React from "react"
import ReactDOM from "react-dom"

import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

import Home from "./components/Home.js"
import Banner from "./components/Banner.js"

import registerServiceWorker from "./registerServiceWorker.js"

import "./styles/index.css"

ReactDOM.render(<Header />, document.getElementById("header"))
ReactDOM.render(<Banner />, document.getElementById("banner"))
ReactDOM.render(<Home />, document.getElementById("home"))
ReactDOM.render(<Footer />, document.getElementById("footer"))

registerServiceWorker()
