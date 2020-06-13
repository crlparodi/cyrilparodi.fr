import React from "react";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

/* MODULES */
import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import { faCogs } from "modules/@fortawesome/free-solid-svg-icons";

class TechnicalSkills extends React.Component {
	constructor(props) {
		super(props);
		this.technical = props.technical;
	}
	render() {
		return (
			<>
				{this.technical.map((technical, index) => {
					return (
						<div className="TechnicalSkill" key={index}>
							<li className="TechnicalSkill-category">{technical.category}</li>
							<ul className="TechnicalSkill-skills">
								{technical.skills.map((skill, index) => {
									return <li key={index}>{skill}</li>;
								})}
							</ul>
							<FontAwesomeIcon icon={faCogs} />
						</div>
					);
				})}
			</>
		);
	}
}

TechnicalSkills.propTypes = {
	technical: PropSets.technicals,
};

export default TechnicalSkills;
