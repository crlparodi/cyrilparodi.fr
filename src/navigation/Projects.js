import React from "react";
import PropTypes from "prop-types";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

/* FONT-AWESOME */
import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import { faReact, faAndroid, faPython, faGithub } from "@fortawesome/free-brands-svg-icons";

const github = "https://github.com/crlparodi/";

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.ref = props.reference;
	}
	render() {
		return (
			<section className="Projects isWrapper" ref={this.ref}>
				<div className="Projects isContainer">
					<h2 className="ob-title isMono">{"projets"}</h2>
					<div className="Web">
						<a className="ob-link" target="_blank" href={github + "cyrilparodi.fr"}>
							<FontAwesomeIcon icon={faReact} />
							<div className="Info">
								<h3 className="Info-name">cyrilparodi.fr</h3>
								<p className="Info-desc">Powered by React.js</p>
							</div>
						</a>
					</div>
					<div className="Android">
						<a className="ob-link" target="_blank" href={github + "atmos"}>
							<FontAwesomeIcon icon={faAndroid} />
							<div className="Info">
								<h3 className="Info-name">atmos</h3>
								<p className="Info-desc">Un projet domotique DIY</p>
							</div>
						</a>
					</div>
					<div className="Python">
						<a className="ob-link" target="_blank" href={github + "cabbage"}>
							<FontAwesomeIcon icon={faPython} />
							<div className="Info">
								<h3 className="Info-name">cabbage</h3>
								<p className="Info-desc">
									Maquette fictive d'une plateforme de babysitting
								</p>
							</div>
						</a>
						<a className="ob-link" target="_blank" href={github + "butterscotch"}>
							<FontAwesomeIcon icon={faPython} />
							<div className="Info">
								<h3 className="Info-name">butterscotch</h3>
								<p className="Info-desc">
									Une interface de monitoring basée sur le projet Prometheus
								</p>
							</div>
						</a>
					</div>
					<div className="Github">
						<a className="ob-button" target="_blank" href={github}>
							<FontAwesomeIcon icon={faGithub} />
							{"mon profil github"}
						</a>
					</div>
				</div>
			</section>
		);
	}
}

Projects.propTypes = {
	reference: PropTypes.any,
};

export default Projects;
