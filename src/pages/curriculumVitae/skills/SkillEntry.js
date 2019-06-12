import React from "react"

class SkillEntry extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
			listState: "closed",
		}
		this._isMounted = false
	}
	render() {
		return (
			<ul className="Entry">
				<div className="Entry-subtitle">
					<li>{this.state.data.category_name}</li>
				</div>
				<ul className="Entry-list">
					{this.state.data.skills.map((skill, skillIndex) => {
						return (
							<li className="Item" key={skillIndex}>
								{skill}
							</li>
						)
					})}
				</ul>
			</ul>
		)
	}
}

export default SkillEntry
