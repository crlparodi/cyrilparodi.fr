import React from "react"

import Loader from "react-loader-advanced"
import Spinner from "./Spinner"

import IMG from "../img/desk.min.jpg"

import "../styles/Banner.scss"

const links = [
	{
		icon: "fab fa-linkedin-in",
		href: "https://www.linkedin.com/in/cyril-parodi",
	},
	{
		icon: "fab fa-twitter",
		href: "https://twitter.com/crlparodi",
	},
	{
		icon: "fas fa-envelope",
		href: "mailto:parodicyril@gmail.com",
	},
]

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
			let update_height = window.innerHeight /* - 48*/
			this.setState({ height: update_height })
		} else {
			let update_height = 1080 /* - 48*/
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
					className="mii-banner mii-dark"
					style={{
						height: this.state.height + "px",
						backgroundImage: "url(" + IMG + ")",
						filter: "background sepia(1)",
					}}
				>
					<div className="mii-banner-case has-text-centered">
						<h1 className="mii-banner is-uppercase">
							Faire d'une passion un métier
						</h1>
						<div className="mii-social">
							{links.map((link, index) => {
								return (
									<a
										href={link.href}
										key={index}
										className="mii-link"
									>
										<i className={link.icon} key={index} />
									</a>
								)
							})}
						</div>
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
