import React from "react";
import PropTypes from "prop-types";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

/* FONT-AWESOME */
import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import { faCode } from "modules/@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const github = "<URL>";

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.data = props.data;
		this.projects = props.projects;
		this.ref = props.reference;
	}
	render() {
		return (
			<section className="Projects isWrapper" ref={this.ref}>
				<div className="Projects isContainer">
					<h2 className="ob-title isMono">{"projets"}</h2>
					<div className="Projects-content">
						{this.projects.map((project, projectIndex) => {
							return (
								<div className="Entry" key={projectIndex}>
									<a className="ob-link" target="_blank" href={project.url}>
										<FontAwesomeIcon icon={faCode} />
										<div className="Info">
											<h3 className="Info-name">{project.name}</h3>
											<p className="Info-desc">{project.description}</p>
										</div>
									</a>
								</div>
							);
						})}

						<div className="Github">
							<a className="ob-button" target="_blank" href={this.data.profiles[2]}>
								<FontAwesomeIcon icon={faGithub} />
								{"dépôts github"}
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

Projects.propTypes = {
	data: PropSets.basics,
	reference: PropTypes.any,
};

export default Projects;
