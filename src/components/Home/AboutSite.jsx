import React, { Component } from "react"
import PropShapes from "../../prop_types/homepage"
import MemePic from "../../img/love_is_in_the_air.jpg"
import "../../styles/AboutSite.css"

class AboutSite extends Component {
	constructor(props) {
		super()
		this.state = {
			content: props.content,
		}
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
								class="fab fa-sass fa-5x"
								title="Sass CSS Type Framework"
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
						{this.state.content.text}
					</div>
				</div>
			</section>
		)
	}
}

AboutSite.propTypes = {
	content: PropShapes.about_site,
}

AboutSite.defaultProps = {
	content: {
		text: "<HERE_ABOUT_THE_SITE>",
	},
}

export default AboutSite
