import React from "react"

import PropShapes from "../../../prop_types/homepage"

import "../../../styles/Likes.scss"

class Likes extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}

	render() {
		return (
			<div className="mii-case">
				<ul className="mii-likes">
					<li className="mii-box start">J'aime...</li>
					{this.state.data.map((like, index) => {
						return (
							<li className="mii-box" key={index}>
								<img className="mii-box-img" src={like.jpg} />
								<div className="mii-box-span">{like.name}</div>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

Likes.propTypes = {
	data: PropShapes.Likes,
}

Likes.defaultProps = {
	data: [
		{
			name: "<NONE>",
			jpg: "<IMG>",
		},
	],
}

export default Likes
