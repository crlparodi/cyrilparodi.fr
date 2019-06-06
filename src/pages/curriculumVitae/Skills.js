import React from "react"

/* MODULES */
import Bricks from "bricks.js"

/* COMPONENT */
import Timeline from "./skills/Timeline"
import SkillEntry from "./skills/SkillEntry"

class Skills extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}
	componentDidMount() {
		this.skillCategoryPackager()
	}
	componentWillUpdate() {
		this.skillCategoryInstance.resize(true)
	}
	skillCategoryPackager() {
		this.skillCateorySizes = [
			{ columns: 1, gutter: 15 },
			{ mq: "640px", columns: 2, gutter: 15 },
			{ mq: "1024px", columns: 3, gutter: 15 },
			{ mq: "1200px", columns: 3, gutter: 15 },
		]

		this.skillCategoryInstance = Bricks({
			sizes: this.skillCateorySizes,
			packed: "packed",
			container: ".Skills-technical-bricklayer",
			position: true,
		})
		this.skillCategoryInstance.pack()
		this.skillCategoryInstance.resize(true)
	}
	skillCategoryBricklayer() {}
	render() {
		return (
			<section className="Skills isWrapper">
				<div className="Skills-technical isContainer">
					<h2 className="Skills-title ob-title isPrimary">
						{"mon savoir-faire."}
					</h2>
					<Timeline />
					<div className="Skills-technical-bricklayer">
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
					<div className="Skills-english-subtitle">
						<div className="Skills-english-subtitle-cover text-center">
							{"Niveau d'Anglais"}
						</div>
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
					<ul className="Skills-english-levelIndicator">
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
