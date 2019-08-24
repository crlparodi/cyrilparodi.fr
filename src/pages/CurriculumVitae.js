import React from "react"

/* DATA */
import * as CVData from "data/pages.curriculumVitae.json"

/* COMPONENTS */
import Education from "./curriculumVitae/Education"
import Experiences from "./curriculumVitae/Experiences"
import Certifications from "./curriculumVitae/Certifications"
import Skills from "./curriculumVitae/Skills"

class CurriculumVitae extends React.Component {
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
				<Education data={CVData.education} />
				<Experiences data={CVData.experience} />
				<Certifications data={CVData.certifications} />
				<Skills data={CVData.skills} />
			</div>
		)
	}
}

export default CurriculumVitae
