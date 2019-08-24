import React from "react"
import * as ProjectsData from "data/pages.portfolio.json"

/* COMPONENTS */
import Projects from "./portfolio/Projects"

class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.ref = React.createRef()
	}
	componentDidMount() {
		window.scrollTo(0, this.ref.current.offsetTop - 64)
	}
	componentWillUpdate() {
		window.scrollTo(0, this.ref.current.offsetTop - 64)
	}
	render() {
		return (
			<div ref={this.ref}>
				<Projects data={ProjectsData.projects} />
			</div>
		)
	}
}

export default Portfolio
