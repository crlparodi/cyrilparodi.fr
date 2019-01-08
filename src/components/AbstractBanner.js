import React from "react"

/* MEDIAS */
import BannerBlaze from "img/coding_chalk.min.png"

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
	updateCaseDimensions() {
		if (window.innerHeight <= 1080) {
			let update_height = window.innerHeight - 64
			if (this._isMounted) this.setState({ caseHeight: update_height })
		} else {
			let update_height = 1080 - 64
			if (this._isMounted) this.setState({ caseHeight: update_height })
		}
	}
	updateBlazeDisplay() {
		if (window.scrollY > window.innerHeight - 64) {
			if (this._isMounted) this.setState({ display: "none" })
		} else {
			if (this._isMounted) this.setState({ display: "initial" })
		}
	}
	componentDidMount() {
		this._isMounted = true
		this.updateDimensions()
		this.updateCaseDimensions()
		window.addEventListener("resize", this.updateDimensions.bind(this))
		window.addEventListener("resize", this.updateCaseDimensions.bind(this))
		window.addEventListener("scroll", this.updateBlazeDisplay.bind(this))
	}
	componentWillUnmount() {
		this._isMounted = false
	}
	render() {
		return (
			<section
				className="AbstractBanner theme-dark"
				style={{ height: this.state.height + "px" }}
			>
				<div
					className="AbstractBanner-container grid-container"
					style={{ height: this.state.caseHeight + "px" }}
				>
					<div
						className="AbstractBanner-blaze cell"
						style={{
							display: this.state.display,
							backgroundImage: "url(" + BannerBlaze + ")",
						}}
					/>
					<div className="AbstractBanner-title cell grid-y">
						<h1
							className="Title"
							style={{ display: this.state.display }}
						>
							Ingénieur en développement embarqué / logiciel.
						</h1>
						<h2
							className="Subtitle"
							style={{ display: this.state.display }}
						>
							près d'Aix-en-Provence, Provence-Alpes-Côte d'Azur,
							FRANCE
						</h2>
						<p />
					</div>
				</div>
			</section>
		)
	}
}

AbstractBanner.propTypes = {}

AbstractBanner.defaultProps = {}

export default AbstractBanner
