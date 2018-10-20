import React from "react"
import request from "superagent"
import PropShapes from "../../prop_types/homepage"
import Button from "../../components/Button"
import "../../styles/CVSection.css"

class CVSection extends React.Component {
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
			<section className="access-cv is-widescreen">
				<div className="container">
					<div className="title is-medium">
						<h2>Curriculum Vitae</h2>
					</div>
					<div className="links">
						{this.state.data.map((cv_path, index) => {
							return <Button dark={false} data={cv_path} />
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
