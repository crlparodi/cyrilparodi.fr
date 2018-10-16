import React from "react"
import request from "superagent"
import PropShapes from "../../prop_types/homepage"
import "../../styles/CVSection.css"

class CVSection extends React.Component {
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
			<section className="access-cv is-widescreen">
				<div className="container">
					<div className="title is-medium">
						<h2>Curriculum Vitae</h2>
					</div>
					<div className="links">
						{this.state.data.map((cv_path, index) => {
							return (
								<a
									className="button is-large"
									href={cv_path.link}
								>
									<span>{cv_path.html}</span>
									<i className={cv_path.icon} />
								</a>
							)
						})}
					</div>
				</div>
			</section>
		)
	}
}

CVSection.propTypes = {
	data: PropShapes.cv_link,
}

CVSection.defaultProps = {
	data: {
		html: "<EMPTY>",
		icon: "<X>",
		link: "<EMPTY>",
	},
}

export default CVSection
