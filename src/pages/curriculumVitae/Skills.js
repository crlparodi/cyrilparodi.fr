import React from "react"

/* COMPONENT */
import SkillEntry from "./skills/SkillEntry"

class Skills extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data
		}
	}
	render() {
		return (
			<section className="Skills isWrapper">
				<div className="Skills-container isContainer">
					<h2 className="Skills-container-title ob-title isPrimary">
						{"mon savoir-faire."}
					</h2>
					<div className="Skills-general">
						{this.state.data.technical_level.map(
							(skillCategory, SCIndex) => {
								return (
									<SkillEntry
										key={SCIndex}
										data={skillCategory}
									/>
								)
							}
						)}
					</div>
				</div>
			</section>
		)
	}
}

Skills.defaultProps = {
	data: {
		technical_level: [
			{
				category_name: "<CATEGORY>",
				skills: ["<SKILL1>", "<SKILL2"]
			},
			{
				category_name: "<CATEGORY>",
				skills: ["<SKILL>"]
			},
			{
				category_name: "<CATEGORY>",
				skills: ["<SKILL1>", "<SKILL2>", "<SKILL3"]
			}
		]
	}
}

export default Skills
