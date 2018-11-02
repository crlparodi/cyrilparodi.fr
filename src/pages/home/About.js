import React from "react"
import request from "superagent"
import PropShapes from "../../prop_types/homepage"
import "../../styles/About.scss"
import CVSection from "./about/CVSection"
import Likes from "./about/Likes"

import * as HomeData from "../../prop_types/homepage.json"

class About extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}
	componentDidMount() {
		return request.get(this.state.data).then((error, response) => {
			return error
				? error
				: this.setState({
					data: this.props.defaultProps,
				  })
		})
	}
	render() {
		return (
			<section className="mii-about mii-light" id="mii-about">
				<div className="mii-min-section container">
					<div className="mii-about-catch content has-text-justified">
						{this.state.data.text.map((text_item, index) => {
							return <p>{text_item}</p>
						})}
					</div>
					<CVSection data={HomeData.cv_link} />
				</div>
				<span className="mii-separator" />
				<div className="mii-min-section container">
					<Likes data={this.state.data.likes} />
				</div>
				<span className="mii-separator" />
				<div className="mii-min-section container">
					<div className="box">
						<p>Section du site en construction</p>
					</div>
					<div className="content">
						<div className="subtitle">
							<h3>
								Ce que j'ai à proposer ... (Ingénieur rime avec)
							</h3>
						</div>
						<div className="content">
							<ul>
								{this.state.data.qualities.map(
									(quality, index) => {
										return (
											<li>
												<b>{quality}</b>
											</li>
										)
									},
								)}
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

About.propTypes = {
	data: PropShapes.about_me,
}

About.defaultProps = {
	data: {
		text: "<TEXT>",
		qualities: "<QUALITY>",
		likes: "<LIKE>",
	},
}

export default About
