import React from "react"

class Human extends React.Component {
	chartRef = React.createRef()
	constructor(props) {
		super()
		this.state = {
			data: props.data
		}
	}
	render() {
		return (
			<section className="Human isWrapper">
				<div className="Human-container isContainer">
					<h2 className="ob-title isPrimary">{"mes valeurs"}</h2>
					<ol className="List">
						{this.state.data.map((humanSkill, HSIndex) => {
							return (
								<div
									className="Prop cell small-auto medium-6 large-4 xlarge-3"
									key={HSIndex}
								>
									<li className="Prop-name text-left">
										{humanSkill.name}
									</li>
									<p className="Prop-quote text-left">
										{humanSkill.quote}
									</p>
								</div>
							)
						})}
					</ol>
				</div>
			</section>
		)
	}
}

Human.defaultProps = {
	data: "<NONE>"
}

export default Human
