import React from "react";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

class SoftSkills extends React.Component {
	constructor(props) {
		super();
		this.soft = props.soft.sort((a, b) => {
			return b.eval - a.eval;
		});
	}
	render() {
		return (
			<>
				{this.soft.map((soft, index) => {
					return (
						<div className="SoftSkill" key={index}>
							<li className="SoftSkill-skill">{soft.skill}</li>
							<div className="SoftSkill-progress">
								<div
									className="ProgressBar"
									style={{
										right: "calc(100% / 5 * (5 - " + soft.eval + "))",
									}}
								/>
							</div>
						</div>
					);
				})}
			</>
		);
	}
}

SoftSkills.propTypes = {
	soft: PropSets.softs,
};

export default SoftSkills;
