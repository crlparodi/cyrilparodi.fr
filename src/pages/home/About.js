import React from "react"

import PropShapes from "../../prop_types/homepage"

import CVSection from "./about/CVSection"
import Likes from "./about/Likes"
import SoftSkills from "./about/SoftSkills"

import "../../styles/About.scss"

class About extends React.Component {
	constructor(props) {
		super()
		this.state = {
			About: props.About,
			CVSection: props.CVSection,
			Likes: props.Likes,
			SoftSkills: props.SoftSkills,
		}
	}
	render() {
		return (
			<div className="mii-about mii-light" id="mii-about">
				<div className="mii-min-section container">
					<h2 className="mii-title has-text-centered">bonjour !</h2>
					<div className="mii-entry content has-text-centered">
						{this.state.About.map((text_item, index) => {
							return (
								<p className="mii-dialog" key={index}>
									{text_item}
								</p>
							)
						})}
					</div>
					<CVSection data={this.state.CVSection} />
				</div>
				<Likes data={this.state.Likes} />
				<div className="mii-min-section container">
					<SoftSkills data={this.state.SoftSkills} />
				</div>
			</div>
		)
	}
}

About.propTypes = {
	About: PropShapes.About,
	CVSection: PropShapes.CVSection,
	Likes: PropShapes.Likes,
	SoftSkills: PropShapes.SoftSkills,
}

export default About
