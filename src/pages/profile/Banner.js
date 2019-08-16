import React from "react"
import { Link } from "react-router-dom"

/* COMPONENTS */
import Button from "root/components/Button"

class Banner extends React.Component {
	constructor() {
		super()
		this.state = {
			height: 1080,
			showLoader: true
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
					height: this.state.height + "px",
					backgroundImage:
						"url(https://images.unsplash.com/photo-1484662020986-75935d2ebc66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
					filter: "background sepia(1)"
				}}
			>
				<div className="Banner-container">
					<div className="Welcome">
						<div className="Welcome-msg">
							<h1 className="ob-title isPrimary">
								{"faire d'une passion un métier."}
							</h1>
							<p>
								{
									"Jeune diplômé d'ingénieur originaire d'Aix-en-Provence, je souhaite quitter l'électronique pour démarrer dans l'informatique."
								}
							</p>
						</div>
						<div className="Welcome-links">
							<Link className="Button" to="/cv">
								{"monparcours.html"}
							</Link>
							<Button
								alt
								inner={"moncv.pdf"}
								url={
									"http://cyrilparodi.fr/docs/CV_6.1_0719.pdf"
								}
							/>
						</div>
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
