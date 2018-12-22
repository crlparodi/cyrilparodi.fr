import React from "modules/react"

/* COMPONENTS */
import FooterDesktop from "./footer/FooterDesktop"
import FooterTouch from "./footer/FooterTouch"

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
	footerScreenAdapter() {
		if (window.innerWidth <= 1023) {
			this.setState({ footerComponent: <FooterTouch /> })
		}
		if (window.innerWidth > 1023) {
			this.setState({ footerComponent: <FooterDesktop /> })
		}
	}
	render() {
		return (
			<section className="Footer theme-dark">
				<div className="Section isSvg">
					<svg
						className="Section-svg"
						id="bigTriangleColor"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="100%"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<path
							className="isUnder"
							d="M 0 0 l 0 20 l 50 60 l 50 -60 l 0 -20"
						/>
						<path d="M 0 -1 l 0 1 l 50 80 l 50 -80.00 l 0 -1" />
					</svg>
					<div className="Section-scrollToTop">
						<a
							onClick={() => {
								window.scrollTo(0, 0)
							}}
						>
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
