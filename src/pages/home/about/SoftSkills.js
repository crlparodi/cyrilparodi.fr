import React from "react"

/* PROP-TYPES */
import PropShapes from "root/prop_types/pages.home"

class SoftSkills extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}

	render() {
		return (
			<div className="SoftSkills Section isMin grid-container">
				<h2 className="ob-title text-center">mes points forts.</h2>
				<ol className="SoftSkill grid-container grid-x grid-padding-x">
					{this.state.data.map((item, index) => {
						return (
							<div
								className="cell small-auto medium-6 large-4 xlarge-3"
								key={index}
							>
								<li className="Prop text-left">{item}</li>
							</div>
						)
					})}
				</ol>
			</div>
		)
	}
}

SoftSkills.propTypes = {
	data: PropShapes.SoftSkills,
}

SoftSkills.defaultProps = {
	data: "<NONE>",
}

export default SoftSkills
