import React from "react"
import PropShapes from "../../prop_types/homepage"

import "../../styles/Mobility.scss"

class Mobility extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}
	render() {
		return (
			<section className="mii-mobility mii-dark">
				<div className="mii-svg-block">
					<svg
						className="mii-svg"
						id="bigTriangleColor"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="100%"
						height="110"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<path d="M 0 -0.05 l 100 30 l 0 -30.05" />
						<path
							className="overflow"
							d="M 0 -1 l 100 15 l 0 -15.0 l 0 -1"
						/>
					</svg>
				</div>
				<div className="bul-tool container">
					<div className="bul-tool columns">
						<div className="mii-map column is-two-thirds">
							<div className="mii-frame map-responsive">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262342.0976167936!2d5.004701119168034!3d43.408951485126536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9e899dfa199a3%3A0xe6d9c9caf3ba12b1!2s13730+Saint-Victoret!5e0!3m2!1sfr!2sfr!4v1541180813645"
									width="100%"
									height="418"
								/>
							</div>
						</div>
						<div className="mii-desc column">
							{this.state.data.map((paragraph, index) => {
								return <p>{paragraph}</p>
							})}
						</div>
					</div>
				</div>
				<div className="mii-svg-block">
					<svg
						className="mii-svg"
						id="bigTriangleColor"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="100%"
						height="110"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<path d="M 0 100.00 l 0 -40 l 100 40.00 l 0 0.00" />
						<path
							className="overflow"
							d="M 0 101 l 0 -20 l 100 20.00 l 0 1"
						/>
					</svg>
				</div>
			</section>
		)
	}
}

Mobility.propTypes = {
	data: PropShapes.job_research,
}

Mobility.defaultProps = {
	data: "<INPUT>",
}

export default Mobility
