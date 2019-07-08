import React from "react"
import Loader from "react-loader-advanced"
import { Link } from "react-router-dom"

/* COMPONENTS */
import Spinner from "root/components/Spinner"
import Button from "root/components/Button"

/* MEDIAS */
import IMG from "img/desk.min.jpg"

class Banner extends React.Component {
	constructor() {
		super()
		this.state = {
			height: 1080,
			showLoader: true,
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

	imageLoader() {
		const hdImg = new Image()
		hdImg.src = IMG

		hdImg.onload = () => {
			if (this._isMounted) {
				this.setState({
					showLoader: false,
				})
			}
		}
	}

	componentDidMount() {
		this._isMounted = true
		this.updateDimensions()
		window.addEventListener("resize", this.updateDimensions.bind(this))
		this.imageLoader()
	}

	componentWillUnmount() {
		this._isMounted = false
	}

	banner() {
		return (
			<Loader
				show={this.state.showLoader}
				message={<Spinner />}
				backgroundStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
				hideContentOnLoad={true}
			>
				<section
					className="Banner isWrapper"
					style={{
						height: this.state.height + "px",
						backgroundImage: "url(https://images.unsplash.com/photo-1484662020986-75935d2ebc66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
						filter: "background sepia(1)",
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
										"Jeune diplômé d'ingénieur originaire d'Aix-en-Provence, je souhaite quitter l'électronique pour démarrer ma carrière professionnelle dans le développement."
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
										"http://www.cyrilparodi.fr/docs/CV_6.1_1018_C.pdf"
									}
								/>
							</div>
						</div>
					</div>
				</section>
			</Loader>
		)
	}

	render() {
		return this.banner()
	}
}

export default Banner
