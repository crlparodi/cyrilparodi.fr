import React from "react"
import "../styles/Banner.css"

class Banner extends React.Component {
	constructor() {
		super()
		this.state = {
			height: 1080
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
	}

	banner() {
		return (
			<div
				className="small_banner"
				style={{ height: this.state.height + "px" }}
			>
				<div className="banner_intro has-text-centered">
					<h1 className="title is-1 is-uppercase has-text-white">
						Faire d'une passion un métier
					</h1>
					<p className="subtitle has-text-white">
						Je suis un ancien diplômé d'électronique à la recherche
						d'une opportunité en développement.
					</p>
				</div>
			</div>
		)
	}

	render() {
		return this.banner()
	}
}

export default Banner
