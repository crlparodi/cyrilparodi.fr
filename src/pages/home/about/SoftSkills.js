import React from "react"

import PropShapes from "../../../prop_types/homepage"

import "../../../styles/SoftSkills.scss"

class SoftSkills extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}

	render() {
		return (
			<div className="mii-case">
				<h2 className="mii-title">Mes 7 qualités</h2>
				<ol className="mii-soft-skills columns is-multiline">
					{this.state.data.map((item, index) => {
						return (
							<div
								className="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
								key={index}
							>
								<li className="mii-prop">{item}</li>
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
