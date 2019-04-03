import React from "react"

/* PROP-TYPES */
import PropShapes from "root/prop_types/pages.curriculumVitae"

class Experiences extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}
	render() {
		return (
			<section className="Experiences Section theme-light">
				<div className="Experiences-container grid-container">
					<h2 className="Experiences-title ob-title text-center">
						{"je suis passé par là."}
					</h2>
					<ul>
						{this.state.data.map((experience, index) => {
							return (
								<li className="Entry" key={index}>
									<h3 className="Entry-dates ob-subtitle">
										{experience.year.start +
											" - " +
											experience.year.end}
									</h3>
									<h3 className="Entry-job ob-subtitle">
										{experience.jobname}
									</h3>
									<p>{experience.company}</p>
									<p>{experience.description}</p>
								</li>
							)
						})}
					</ul>
				</div>
			</section>
		)
	}
}

Experiences.propTypes = {
	data: PropShapes.Experiences,
}

Experiences.defaultProps = {
	data: [
		{
			jobname: "<NOM_DU_POSTE>",
			year: {
				start: "<DATE_DEBUT>",
				end: "<DATE_FIN>",
			},
			company: "<ENTREPRISE_SOCIETE>",
			description: "<DESCRIPTION>",
		},
	],
}

export default Experiences
