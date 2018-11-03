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
				<ul className="mii-soft-skills">
					<li className="mii-sticker mii-sticker-start">
						<span>Ingénieur rime avec ...</span>
					</li>
					{this.state.data.map((item, index) => {
						return (
							<li className="mii-sticker">
								<span>{item}</span>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

SoftSkills.propTypes = {
	data: PropShapes.about_me.soft_skills,
}

SoftSkills.defaultProps = {
	data: "<NONE>",
}

export default SoftSkills
