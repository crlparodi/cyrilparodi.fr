import React from "react"

import Loader from "react-loader-advanced"
import Spinner from "./Spinner"

import IMG from "../img/dil-679756-unsplash.jpg"

import "../styles/Banner.css"

class Banner extends React.Component {
	constructor() {
		super()
		this.state = {
			height: 1080,
			showLoader: true,
		}
	}

	updateDimensions() {
		if (window.innerHeight <= 1080) {
			let update_height = window.innerHeight - 48
			this.setState({ height: update_height })
		} else {
			let update_height = 1080 - 48
			this.setState({ height: update_height })
		}
	}

	componentDidMount() {
		this.updateDimensions()
		window.addEventListener("resize", this.updateDimensions.bind(this))

		const hdImg = new Image()
		hdImg.src = IMG

		hdImg.onload = () => {
			this.setState({
				showLoader: false,
			})
		}
	}

	banner() {
		return (
			<Loader
				show={this.state.showLoader}
				message={<Spinner />}
				backgroundStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
				hideContentOnLoad={true}
			>
				<div
					className="small_banner"
					style={{
						height: this.state.height + "px",
						backgroundImage: "url(" + IMG + ")",
					}}
				>
					<div className="banner_intro has-text-centered">
						<h1 className="title is-1 is-uppercase has-text-white">
							Faire d'une passion un métier
						</h1>
						<p className="subtitle has-text-white">
							Je suis un ancien diplômé d'électronique à la
							recherche d'une opportunité en développement.
						</p>
					</div>
				</div>
			</Loader>
		)
	}

	render() {
		return this.banner()
	}
}

export default Banner
