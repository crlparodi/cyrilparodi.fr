import React, { Component } from "react"
import request from "superagent"
import PropShapes from "../../prop_types/homepage"
import MemePic from "../../img/love_is_in_the_air.jpg"
import "../../styles/AboutSite.css"

class AboutSite extends Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}
	componentDidMount = () => {
		return request.get(this.props.data).end(
			function(error, response) {
				return error
					? error
					: this.setState({
							resume: response.body,
					  })
			}.bind(this),
		)
	}
	render() {
		return (
			<section className="about-here">
				<div className="container">
					<div className="title is-medium">
						<h2>À propos du site</h2>
					</div>
					<div className="made-with-love">
						<a href="https://reactjs.org/">
							<i
								className="fab fa-react fa-5x"
								title="React.js Framework"
							/>
						</a>
						<i className="fas fa-plus fa-2x has-text-centered" />
						<a href="https://sass-lang.com/">
							<i
								className="fab fa-sass fa-5x"
								title="Sass CSS Extension"
							/>
						</a>
						<i className="fas fa-plus fa-2x has-text-centered" />
						<a href="https://bulma.io/">
							<img
								src="https://jgthms.com/web-design-in-4-minutes/bulma.png"
								alt="Bulma CSS Framework"
								title="Bulma CSS Design Framework"
							/>
						</a>
						<i className="fas fa-plus fa-2x has-text-centered" />
						<a href={MemePic}>
							<i
								className="fas fa-heart fa-5x has-text-danger"
								title="... et beaucoup d'amour."
							/>
						</a>
					</div>
					<div className="content has-text-justified">
						{this.state.data.text.map((text_item, index) => {
							return <p>{text_item}</p>
						})}
					</div>
				</div>
			</section>
		)
	}
}

AboutSite.propTypes = {
	data: PropShapes.about_site,
}

AboutSite.defaultProps = {
	data: {
		text: "<HERE_ABOUT_THE_SITE>",
	},
}

export default AboutSite
