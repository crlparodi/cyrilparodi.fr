import React from "react"

/* COMPONENTS */
import PortfolioBanner from "./portfolio/PortfBanner"
import Projects from "./portfolio/Projects"

class Portfolio extends React.Component {
	render() {
		return (
			<div>
				<PortfolioBanner />
				<Projects />
			</div>
		)
	}
}

export default Portfolio
