import React from "react"
import request from "superagent"
import PropShapes from "../../prop_types/homepage"
import "../../styles/About.css"

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
			<section className="about-me is-widescreen" id="about-me">
				<div className="container">
					<div className="title is-medium">
						<h2>À propos de moi</h2>
					</div>
					<div className="content has-text-justified">
						{this.state.data.text.map((text_item, index) => {
							return <p>{text_item}</p>
						})}
					</div>
					<div className="subtitle">
						<h3>Quels sont mes goûts ?</h3>
					</div>
					<div className="content">
						<div className="columns">
							<div className="column is-half">
								<div className="sub columns">
									<div className="column is-one-fifth has-text-success has-text-centered">
										<i className="fas fa-plus-circle fa-3x" />
									</div>
									<div className="column">
										<ul className="likes">
											{this.state.data.likes.map(
												(like, index) => {
													return <li>{like}</li>
												},
											)}
										</ul>
									</div>
								</div>
							</div>
							<div className="column is-half">
								<div className="sub columns">
									<div className="column is-one-fifth has-text-danger has-text-centered">
										<i className="fas fa-minus-circle fa-3x" />
									</div>
									<div className="column">
										<ul className="likes">
											{this.state.data.dislikes.map(
												(dislike, index) => {
													return <li>{dislike}</li>
												},
											)}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="subtitle">
						<h3>Ce que je recherche ...</h3>
					</div>
					<div className="content has-text-justified">
						{this.state.data.job_research.map(
							(text_item, index) => {
								return <p>{text_item}</p>
							},
						)}
					</div>
					<div className="subtitle">
						<h3>Ce que j'ai à vendre ...</h3>
					</div>
					<div className="content">
						<ul>
							{this.state.data.qualities.map((quality, index) => {
								return (
									<li>
										<b>{quality}</b>
									</li>
								)
							})}
						</ul>
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
		likes: "<LIKE>",
		dislikes: "<DISLIKE>",
		job_research: "<KIND_OF_JOB>",
		qualities: "<QUALITY>",
	},
}

export default About
