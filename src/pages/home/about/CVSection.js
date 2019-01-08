import React from "react"

/* PROP-TYPES */
import PropShapes from "root/prop_types/pages.home"

/* COMPONENTS */
import Button from "root/components/Button"

class CVSection extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}
	render() {
		return (
			<div className="CVSection grid-container grid-x grid-padding-x grid-padding-y">
				{this.state.data.map((e, index) => {
					return (
						<div
							key={index}
							className="CVSection-button cell medium-auto"
						>
							<Button dark={false} inner={e.inner} url={e.url} />
						</div>
					)
				})}
			</div>
		)
	}
}

CVSection.propTypes = {
	data: PropShapes.CVSection,
}

CVSection.defaultProps = {
	data: [
		{
			inner: "<EMPTY>",
			ico: "<ICO>",
			url: "<URL>",
		},
	],
}

export default CVSection
