import React from "react"

import PropShapes from "../../../prop_types/homepage"

import Button from "../../../components/Button"

import "../../../styles/CVSection.scss"

class CVSection extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}
	render() {
		return (
			<div className="mii-cv-section">
				{this.state.data.map((e, index) => {
					return (
						<Button
							dark={false}
							inner={e.inner}
							ico={e.ico}
							url={e.url}
							key={index}
						/>
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
