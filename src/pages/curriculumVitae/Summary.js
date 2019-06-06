import React from "react"
import ReactDOM from "react-dom"
import Education from "./Education"

class Summary extends React.Component {
	render() {
		return (
			<section className="Summary Section isTopBordered theme-light">
				<div className="Summary-container grid-container">
					<div className="Mosaik text-center">
						<div className="Mosaik-link">
							<div className="onCover">
								<i className="fas fa-graduation-cap fa-3x" />
								<span>formations.</span>
							</div>
						</div>
						<div className="Mosaik-link">
							<div className="onCover">
								<i className="fas fa-cogs fa-3x" />
								<span>parcours professionnel.</span>
							</div>
						</div>
						<div className="Mosaik-link">
							<div className="onCover">
								<i className="fas fa-medal fa-3x" />
								<span>certifications.</span>
							</div>
						</div>
						<div className="Mosaik-link">
							<div className="onCover">
								<i className="fas fa-check fa-3x" />
								<span>compétences techniques.</span>
							</div>
						</div>
						<div className="Mosaik-link">
							<div className="onCover">
								<i className="fas fa-comments fa-3x" />
								<span>langues.</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Summary
