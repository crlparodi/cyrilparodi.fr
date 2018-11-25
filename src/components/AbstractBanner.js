import React from "react"
import BannerBlaze from "root/img/coding_chalk.min.png"
import "./AbstractBanner.scss"

class AbstractBanner extends React.Component {
	constructor(props) {
		super()
		/* NOTE TO MYSELF: When i'm adding a stateless propType to a stateful component,
		 * don't forget to declare the new states from the propTypes
		 */
		this.state = {
			height: 1080,
			caseHeight: () => {
				1080 - 64
			},
			display: "initial",
			data: props.data,
		}
	}
	updateDimensions() {
		if (window.innerHeight <= 1080) {
			let update_height = window.innerHeight
			this.setState({ height: update_height })
		} else {
			let update_height = 1080
			this.setState({ height: update_height })
		}
	}
	updateCaseDimensions() {
		if (window.innerHeight <= 1080) {
			let update_height = window.innerHeight - 64
			this.setState({ caseHeight: update_height })
		} else {
			let update_height = 1080 - 64
			this.setState({ caseHeight: update_height })
		}
	}
	updateBlazeDisplay() {
		if (window.scrollY > window.innerHeight - 64) {
			this.setState({ display: "none" })
		} else {
			this.setState({ display: "initial" })
		}
	}
	componentDidMount() {
		this.updateDimensions()
		this.updateCaseDimensions()
		window.addEventListener("resize", this.updateDimensions.bind(this))
		window.addEventListener("resize", this.updateCaseDimensions.bind(this))
		window.addEventListener("scroll", this.updateBlazeDisplay.bind(this))
	}
	render() {
		return (
			<section
				className="mii-abstract-banner mii-dark"
				style={{ height: this.state.height + "px" }}
			>
				<div
					className="container"
					style={{ height: this.state.caseHeight + "px" }}
				>
					<div className="mii-abstract-banner-case has-text-centered">
						<div
							className="mii-media"
							style={{
								display: this.state.display,
								backgroundImage: "url(" + BannerBlaze + ")",
							}}
						/>
						<h1
							className="mii-banner-title"
							style={{ display: this.state.display }}
						>
							Ingénieur en développement embarqué / logiciel.
						</h1>
						<h2
							className="mii-banner-subtitle"
							style={{ display: this.state.display }}
						>
							près d'Aix-en-Provence, Provence-Alpes-Côte d'Azur,
							FRANCE
						</h2>
					</div>
				</div>
			</section>
		)
	}
}

AbstractBanner.propTypes = {}

AbstractBanner.defaultProps = {}

export default AbstractBanner
