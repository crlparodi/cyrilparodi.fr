import React from "react"

/* COMPONENT CHILD COMPONENTS */
import EducationEntry from "./education/EducationEntry"

/* MEDIAS */
import ElcBridgeBlaze from "img/mii_electronics"
import WrkProcessBlaze from "img/mii_process"
import ElcChipBlaze from "img/mii_microprocessor"
import InfBugBlaze from "img/mii_info"

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
		}
	}
	render() {
		return (
			<section className="Education isWrapper">
				<div className="Education-container isContainer">
					<h2 className="Education-title ob-title isPrimary">
						{"formations. - diplômes."}
					</h2>
					<div className="Education-entries">
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
				</div>
			</section>
		)
	}
}

EducationEntry.defaultProps = {
	data: [
		{
			grade: "<GRADE>",
			year: 1900,
			school: "<SCHOOL>",
			description: ["<SOME_DESCRIPTION>", "<SOME_DESCRIPTION>"],
			keywords: ["<#KEYWORD1>", "<#KEYWORD2>"],
			links: [
				{
					name: "NAME",
					url: "http://www.qwant.fr",
				},
			],
		},
	],
}

export default Education
