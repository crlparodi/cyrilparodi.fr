import React from "react"

/* DATA */
import * as CVData from "data/pages.curriculumVitae.json"

/* COMPONENTS */
import CVBanner from "./curriculumVitae/CVBanner"
import Summary from "./curriculumVitae/Summary"
import Education from "./curriculumVitae/Education"
import Experiences from "./curriculumVitae/Experiences"
import Certifications from "./curriculumVitae/Certifications"
import Skills from "./curriculumVitae/Skills"

class CurriculumVitae extends React.Component {
	render() {
		return (
			<div>
				<CVBanner />
				<Education data={CVData.education} />
				<Experiences data={CVData.experience} />
				<Certifications data={CVData.certifications} />
				<Skills data={CVData.skills} />
			</div>
		)
	}
}

export default CurriculumVitae
