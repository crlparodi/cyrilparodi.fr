import React from "react"

/* MEDIAS */
import BannerBlaze from "img/coding_chalk.min.png"
import ElcBridgeBlaze from "img/bridge_chalk.min.png"
import ElcOperBlaze from "img/oper_chalk.min.png"
import ElcChipBlaze from "img/chip_chalk.min.png"
import InfCycleBlaze from "img/bug_chalk.min.png"

/* PROP-TYPES */
import PropShapes from "root/prop_types/pages.curriculumVitae"

const blazes = [InfCycleBlaze, ElcChipBlaze, ElcOperBlaze, ElcBridgeBlaze]

class Education extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}
	render() {
		return (
			<section className="Education Section theme-dark" id="EducationID">
				<div className="Education-container grid-container">
					<h2 className="Education-title ob-title text-center">
						{"j'ai étudié là-bas."}
					</h2>
					{this.state.data.map((education, index) => {
						return (
							<div className="Entry" key={index}>
								<div className="Entry-ob">
									<h3 className="ob-subtitle">
										{education.grade}
									</h3>
									<p>{education.year}</p>
									<p>{education.school}</p>
									<p>{education.description}</p>
									{education.keywords.map(
										(keyword, index) => {
											return <span>{keyword} </span>
										},
									)}
								</div>
								<div className="Entry-pic">
									<img src={blazes[index]} alt="" />
								</div>
							</div>
						)
					})}
				</div>
			</section>
		)
	}
}

Education.propTypes = {
	data: PropShapes.Education,
}

Education.defaultProps = {
	data: [
		{
			grade: "<GRADE>",
			year: 1900,
			school: "<SCHOOL>",
			description: "<SOME_DESCRIPTION>",
			keywords: ["<#KEYWORD1>", "<#KEYWORD2>"],
		},
	],
}

export default Education
