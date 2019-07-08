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
			<div className="Footer">
				<div className="Footer-container isContainer">
					<div className="Footer-rollback">
						<span className="Separator" />
						<div className="ScrollToTop">
							<a
								onClick={() => {
									window.scrollTo(0, 0)
								}}
							>
								<i className="fas fa-angle-double-up fa-5x" />
							</a>
						</div>
						<span className="Separator" />
					</div>
					{this.state.footerComponent}
				</div>
			</div>
		)
	}
}

export default Footer
