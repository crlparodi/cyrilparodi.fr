import React from "react"

/* MEDIAS */
import IMG from "img/pc_teardown.min.png"

class Banner extends React.Component {
	constructor() {
		super()
		this.state = {
			height: 1080,
			showLoader: true,
			offset: 0
		}
		this._isMounted = false
	}

	updateDimensions() {
		if (window.innerHeight <= 1080) {
			let update_height = window.innerHeight
			if (this._isMounted) this.setState({ height: update_height })
		} else {
			let update_height = 1080
			if (this._isMounted) this.setState({ height: update_height })
		}
	}

	componentDidMount() {
		this._isMounted = true
		this.updateDimensions()
		window.addEventListener("resize", this.updateDimensions.bind(this))
	}

	componentWillUnmount() {
		this._isMounted = false
	}

	banner() {
		return (
			<section
				className="Banner isWrapper"
				style={{
					height: this.state.height + "px"
				}}
			>
				<div
					className="Banner-fluid"
					style={{
						backgroundImage: "url(" + IMG + ")",
						backgroundSize: "cover",
						backgroundPositionX: "center",
						backgroundAttachment: "fixed"
					}}
				>
					<div className="Banner-container">
						<h1 className="ob-title">{"CYRIL PARODI"}</h1>
						<h2 className="ob-subtitle">{"Ingénieur"}</h2>
					</div>
				</div>
			</section>
		)
	}

	render() {
		return this.banner()
	}
}

export default Banner
