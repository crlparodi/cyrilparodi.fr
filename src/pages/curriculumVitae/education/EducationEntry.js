import React from "react"

/* COMPONENTS */
import Button from "root/components/Button"

class EducationEntry extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data
		}
	}
	description = () => {
		if (this.state.data.description) {
			return this.state.data.description.map((description, index) => {
				return <p key={index}>{description}</p>
			})
		}
	}
	links = () => {
		console.log(this.state.data.links)
		if (this.state.data.links != null) {
			return (
				<div className="Links">
					<i className="fas fa-link"></i>
					<div>
						{this.state.data.links.map((link, index) => {
							return (
								<a
									className="ob-link"
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									key={index}
								>
									{link.name}
								</a>
							)
						})}
					</div>
				</div>
			)
		}
	}
	render() {
		return (
			<li className="Entry isContainer">
				<div className="Entry-L">
					<p className="School ob-subtitle">
						{this.state.data.school}
					</p>
					<p className="Year">{this.state.data.year}</p>
				</div>
				<div className="Entry-R">
					<p className="Grade ob-subtitle">{this.state.data.grade}</p>
					<div className="Description">{this.description()}</div>
					<div className="Entry-R-Bottom">
						<i className="fas fa-map-marker-alt" />
						<p className="Locations">{this.state.data.location}</p>
						{this.links()}
					</div>
				</div>
			</li>
		)
	}
}

export default EducationEntry
