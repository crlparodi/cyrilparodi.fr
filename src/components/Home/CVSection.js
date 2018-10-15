import React from "react"
import "../../styles/CVSection.css"

class CVSection extends React.Component {
	render() {
		return (
			<section className="access-cv is-widescreen">
				<div className="container">
					<div className="title is-medium">
						<h2>Mon CV</h2>
					</div>
					<div className="links">
						<a className="button is-large" href="">
							<span>Format Web</span>
							<i class="fas fa-desktop" />
						</a>
						<a className="button is-large" href="">
							<span>Format PDF</span>
							<i class="fas fa-download" />
						</a>
					</div>
				</div>
			</section>
		)
	}
}

export default CVSection
