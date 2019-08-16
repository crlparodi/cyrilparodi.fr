import React from "react"

/* MEDIAS */
import BannerBlaze from "img/dev2_chalk.min.png"

/* COMPONENTS */
import Button from "../../components/Button"

class CVBanner extends React.Component {
	constructor(props) {
		super()
		/* NOTE TO MYSELF: When i'm adding a stateless propType to a stateful component,
		 * don't forget to declare the new states from the propTypes
		 */
		this.state = {
			height: 720,
			caseHeight: () => {
				720 - 64
			},
			display: "initial",
			data: props.data,
		}
		this._isMounted = false
	}
	updateDimensions() {
		if (window.innerHeight <= 720) {
			let update_height = window.innerHeight - 64
			if (this._isMounted) this.setState({ height: update_height })
		} else {
			let update_height = 720 - 64
			if (this._isMounted) this.setState({ height: update_height })
		}
	}
	updateCaseDimensions() {
		if (window.innerHeight <= 720) {
			let update_height = window.innerHeight - 64
			if (this._isMounted) this.setState({ caseHeight: update_height })
		} else {
			let update_height = 720 - 64
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
				className="CVBanner"
				style={{ height: this.state.height + "px" }}
			>
				<div
					className="CVBanner-container isContainer"
					style={{ height: this.state.caseHeight + "px" }}
				>
					<div
						className="CVBanner-blaze"
						style={{
							display: this.state.display,
							backgroundImage: "url(" + BannerBlaze + ")",
						}}
					/>
					<div className="CVBanner-title">
						<h1
							className="ob-title"
							style={{ display: this.state.display }}
						>
							Cyril Parodi
						</h1>
						<h1
							className="ob-title isLittle"
							style={{ display: this.state.display }}
						>
							Ingénieur
						</h1>
						<h2
							className="ob-subtitle"
							style={{ display: this.state.display }}
						>
							Recherche un premier poste en <strong>test logiciel</strong><br /> ou <strong>automatisation de tests</strong>.
						</h2>
						<Button
							inner={"moncv.pdf"}
							url={
								"http://cyrilparodi.fr/docs/CV_6.1_0719.pdf"
							}
						/>
					</div>
				</div>
			</section>
		)
	}
}

CVBanner.propTypes = {}

CVBanner.defaultProps = {}

export default CVBanner
