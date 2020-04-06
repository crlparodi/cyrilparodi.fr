import React from "react";
import PropTypes from "prop-types";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

/* COMPONENT */
import SoftSkills from "./skills/SoftSkills";
import TechnicalSkills from "./skills/TechnicalSkills";
import Resources from "./skills/Resources";
import Languages from "./skills/Languages";

class Skills extends React.Component {
	constructor(props) {
		super(props);
		this.data = props.data;
		this.ref = props.reference;
	}

	render() {
		return (
			<section className="Skills isWrapper" ref={this.ref}>
				<div className="Skills isContainer">
					<h2 className="ob-title isMono">{"compétences"}</h2>
					<h3 className="ob-subtitle isMono">{"personnalité"}</h3>
					<ul className="SoftSkills">
						<SoftSkills soft={this.data.soft} />
					</ul>
					<h3 className="ob-subtitle isMono">{"langues"}</h3>
					<div className="Languages">
						<Languages languages={this.data.languages} />
					</div>
					<h3 className="ob-subtitle isMono">{"compétences techniques"}</h3>
					<div className="TechnicalSkills">
						<TechnicalSkills technical={this.data.technical} />
					</div>
					<h3 className="ob-subtitle isMono">{"ressources"}</h3>
					<div className="Resources">
						<Resources resources={this.data.resources} />
					</div>
				</div>
			</section>
		);
	}
}

Skills.propTypes = {
	data: PropSets.skills,
	reference: PropTypes.any,
};

export default Skills;
