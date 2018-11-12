import React from "modules/react"
import FooterDesktop from "root/components/Footer/FooterDesktop"
import FooterTouch from "root/components/Footer/FooterTouch"
import "./Footer.scss"

class Footer extends React.Component {
	constructor() {
		super()
		this.state = {
			footerComponent: null,
		}
	}
	componentDidMount() {
		this.footerScreenAdapter()
		window.addEventListener("resize", this.footerScreenAdapter.bind(this))
	}
	footerScreenAdapter = () => {
		if (window.innerWidth <= 1023) {
			this.setState({ footerComponent: <FooterTouch /> })
		}
		if (window.innerWidth > 1023) {
			this.setState({ footerComponent: <FooterDesktop /> })
		}
	}
	render() {
		return (
			<section className="mii-footer-master mii-section mii-dark">
				<div className="mii-svg-block">
					<svg
						className="mii-svg"
						id="bigTriangleColor"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="100%"
						height="110"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<path
							className="overflow"
							d="M 0 0 l 0 20 l 50 60 l 50 -60 l 0 -20"
						/>
						<path d="M 0 -1 l 0 1 l 50 80 l 50 -80.00 l 0 -1" />
					</svg>
					<div className="mii-up">
						<a href="#">
							<i className="fas fa-angle-double-up fa-5x" />
						</a>
					</div>
				</div>
				{this.state.footerComponent}
			</section>
		)
	}
}

export default Footer
