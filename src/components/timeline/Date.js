import React from "react"

class Date extends React.Component {
	constructor(props) {
		super()
		this.date = props.date
	}
	render() {
		return (
			<div className="Date">
				<div className="Date-container">
					<div className="Date-container onCover">
						<time>{this.date}</time>
					</div>
				</div>
			</div>
		)
	}
}

export default Date
