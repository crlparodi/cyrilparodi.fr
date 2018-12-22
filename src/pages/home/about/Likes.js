import React from "react"

/* PROP-TYPES */
import PropShapes from "root/prop_types/pages.home"

class Likes extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}

	render() {
		return (
			<section className="Likes theme-dark">
				<div className="Section isSvg">
					<svg
						className="Section-svg"
						id="bigTriangleColor"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="100%"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<path d="M 0 -1 l 0 1 l 0 50 l 100 -50.00 l 0 -1" />
						<path
							className="overflow"
							d="M 0 -1 l 0 1 l 0 35 l 100 -35.00 l 0 -1"
						/>
					</svg>
				</div>
				<div className="grid-container">
					<ul className="Likes-grid">
						<li className="Like isStart ob-title">{"j'aime."}</li>
						{this.state.data.map((like, index) => {
							return (
								<li className="Like" key={index}>
									<img className="Like-img" src={like.jpg} />
									<div className="Like-span">{like.name}</div>
								</li>
							)
						})}
					</ul>
				</div>
				<div className="Section isSvg">
					<svg
						className="Section-svg"
						id="bigTriangleColor"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="100%"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<path d="M 0 100 l 0 -1 l 100 -50.00 l 0 51" />
						<path
							className="overflow"
							d="M 0 101 l 0 -1 l 100 -35.0 l 0 36"
						/>
					</svg>
				</div>
			</section>
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
