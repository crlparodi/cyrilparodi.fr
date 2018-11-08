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
			<section className="mii-about mii-light" id="mii-about">
				<div className="mii-min-section container">
					<div className="mii-about-prepost content has-text-justified">
						{this.state.About.map((text_item, index) => {
							return (
								<p className="mii-post" key={index}>
									{text_item}
								</p>
							)
						})}
					</div>
					<CVSection data={this.state.CVSection} />
				</div>
				<span className="mii-separator" />
				<div className="mii-min-section container">
					<Likes data={this.state.Likes} />
				</div>
				<span className="mii-separator" />
				<div className="mii-min-section container">
					<SoftSkills data={this.state.SoftSkills} />
				</div>
			</section>
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
