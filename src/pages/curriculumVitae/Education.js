import React from "react"

/* COMPONENT CHILD COMPONENTS */
import EducationEntry from "./education/EducationEntry"

/* MEDIAS */
import ElcBridgeBlaze from "img/mii_electronics"
import WrkProcessBlaze from "img/mii_process"
import ElcChipBlaze from "img/mii_microprocessor"
import InfBugBlaze from "img/mii_info"

/* PROP-TYPES */
import PropShapes from "root/prop_types/pages.curriculumVitae"

const blazes = [
	<InfBugBlaze />,
	<ElcChipBlaze />,
	<WrkProcessBlaze />,
	<ElcBridgeBlaze />,
]

class Education extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
			infoDisplay: "none",
		}
	}
	render() {
		return (
			<section className="Education theme-dark" id="EducationID">
				<div className="Section isSvg">
					<svg
						className="Section-svg"
						id="bigTriangleColor"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="100%"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<path d="M 0 -1 l 0 1 l 100 30 l 0 -30.00 l 0 -1" />
						<path
							className="overflow"
							d="M 0 -1 l 0 1 l 100 15 l 0 -15.0 l 0 -1"
						/>
					</svg>
				</div>
				<div className="Education-container grid-container">
					<h2 className="Education-title ob-title text-center">
						{"j'ai étudié là-bas."}
					</h2>
					{this.state.data.map((education, index) => {
						return (
							<EducationEntry
								data={education}
								blaze={blazes[index]}
								key={index}
							/>
						)
					})}
				</div>
				<div className="Section isSvg">
					<svg
						className="Section-svg"
						id="bigTriangleColor"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="100%"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<path d="M 0 101.00 l 0 -1 l 0 -40 l 100 40.00 l 0 1.00" />
						<path
							className="overflow"
							d="M 0 101 l 0 -1 l 0 -20 l 100 20.00 l 0 1"
						/>
					</svg>
				</div>
			</section>
		)
	}
}

Education.propTypes = {
	data: PropShapes.Education,
}

EducationEntry.defaultProps = {
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
