import React from "react"

/* COMPONENT CHILD COMPONENTS */
import EducationEntry from "./education/EducationEntry"

class Education extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data
		}
	}
	render() {
		return (
			<section className="Education isWrapper">
				<div className="Education-container isContainer">
					<h2 className="Education-title ob-title isPrimary">
						{"Formations"}
					</h2>
					<ul className="Education-entries">
						{this.state.data.map((education, index) => {
							return (
								<EducationEntry data={education} key={index} />
							)
						})}
					</ul>
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
			location: "<LOCATION>",
			description: ["<SOME_DESCRIPTION>", "<SOME_DESCRIPTION>"],
			links: [
				{
					name: "NAME",
					url: "http://www.qwant.fr"
				}
			]
		}
	]
}

export default Education
