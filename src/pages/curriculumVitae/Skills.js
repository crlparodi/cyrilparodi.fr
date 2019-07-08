import React from "react"

/* COMPONENT */
import Timeline from "root/components/Timeline"
import SkillEntry from "./skills/SkillEntry"

class Skills extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}
	render() {
		return (
			<section className="Skills isWrapper">
				<div className="Skills-container isContainer">
					<h2 className="Skills-container-title ob-title isPrimary">
						{"mon savoir-faire."}
					</h2>
					{/* <div className="Skills-programmingLanguages">
						<div className="Skills-programmingLanguages-subtitle">
							{"Chronologie des Langages"}
						</div>
						<Timeline data={this.state.data.languages} />
					</div> */}
					<div className="Skills-general">
						{this.state.data.technical_level.map(
							(skillCategory, SCIndex) => {
								return (
									<SkillEntry
										key={SCIndex}
										data={skillCategory}
									/>
								)
							},
						)}
					</div>
					<div className="Skills-english">
						<div className="Skills-english-subtitle">
							{"Niveau d'Anglais"}
						</div>
						<div className="Skills-english-level">
							{this.state.data.english_level.level.map(
								(paragraph, paragraphIndex) => {
									return (
										<p
											className="isMarginless"
											key={paragraphIndex}
										>
											{paragraph}
										</p>
									)
								},
							)}
						</div>
						<ul className="Skills-english-certifications">
							{this.state.data.english_level.certifications.map(
								(langCertif, LCIndex) => {
									return (
										<li key={LCIndex}>
											<p>
												{langCertif.name +
													" " +
													"obtenu avec succès en" +
													" " +
													langCertif.date +
													" " +
													"et un dernier score officiel de" +
													" " +
													langCertif.score +
													" " +
													"sur" +
													" " +
													langCertif.max}
											</p>
											<p />
										</li>
									)
								},
							)}
						</ul>
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
				skills: ["<SKILL1>", "<SKILL2"],
			},
			{
				category_name: "<CATEGORY>",
				skills: ["<SKILL>"],
			},
			{
				category_name: "<CATEGORY>",
				skills: ["<SKILL1>", "<SKILL2>", "<SKILL3"],
			},
		],
		english_level: {
			level: "<NIVEAU>",
			certifications: [
				{
					name: "<NAME>",
					score: 0,
					max: 0,
					date: "<1 JAN 1900>",
				},
			],
		},
	},
}

export default Skills
