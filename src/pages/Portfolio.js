import React from "react"
import * as ProjectsData from "data/pages.portfolio.json"

/* COMPONENTS */
import PortfolioBanner from "./portfolio/PortfBanner"
import Projects from "./portfolio/Projects"

class Portfolio extends React.Component {
	render() {
		return (
			<div>
				<PortfolioBanner />
				<Projects data={ProjectsData.projects}/>
			</div>
		)
	}
}

export default Portfolio
