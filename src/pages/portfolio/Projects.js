import React from "react"

/* MEDIAS */
import PMIIBanner from "img/ProjectsBanner/project-mii.png"
import PCABBanner from "img/ProjectsBanner/project-cabbage.png"
import PBGLBanner from "img/ProjectsBanner/project-butterglue.png"

/* COMPONENTS */
import ProjectEntry from "./projects/ProjectEntry"

const banners = [PMIIBanner, PCABBanner, PBGLBanner]

class Projects extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data
		}
	}
	render() {
		return (
			<section className="Projects isWrapper">
				<ul className="Projects-list isContainer">
					{this.state.data.map((project, pIndex) => {
						return (
							<ProjectEntry
								key={pIndex}
								data={project}
								background={banners[pIndex]}
							/>
						)
					})}
				</ul>
			</section>
		)
	}
}

export default Projects
