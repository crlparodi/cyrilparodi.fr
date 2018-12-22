import React from "react"

/* PROP-TYPES */
import PropShapes from "root/prop_types/pages.home"

/* COMPONENTS */
import CVSection from "./about/CVSection"
import Likes from "./about/Likes"
import SoftSkills from "./about/SoftSkills"

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
			<div className="About theme-light">
				<div className="Section isMin grid-container">
					<h2 className="ob-title text-center">bonjour !</h2>
					<div className="ob-dialog text-center">
						{this.state.About.map((text_item, index) => {
							return <p key={index}>{text_item}</p>
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
