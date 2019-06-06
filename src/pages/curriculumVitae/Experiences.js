import React from "react"

class Experiences extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
			index: 0,
		}
	}
	indexCheck = index => {
		if (index == this.state.index) {
			return "isVisible"
		} else {
			return "isHidden"
		}
	}
	render() {
		return (
			<section className="Experiences isWrapper">
				<div className="Experiences-container isContainer">
					<h2 className="Experiences-title ob-title isPrimary">
						{"parcours professionnel."}
					</h2>
					<div className="Experiences-content">
						<ul className="Fields">
							{this.state.data.map((data, fieldIndex) => {
								return (
									<a
										className="Fields-entry"
										href="javascript:void(0)"
										key={fieldIndex}
									>
										<div
											className="onCover text-center"
											onClick={() => {
												this.setState({
													index: fieldIndex,
												})
											}}
										>
											<li>{data.field}</li>
										</div>
									</a>
								)
							})}
						</ul>
						<div className="Jobs">
							{this.state.data.map((data, jobIndex) => {
								return (
									<div
										className={
											"Jobs-entries" +
											" " +
											this.indexCheck(jobIndex)
										}
										key={jobIndex}
									>
										{data.jobs.map((job, entryIndex) => {
											return (
												<div
													className="Entry"
													key={entryIndex}
												>
													<h6 className="Entry-dates">
														{job.start +
															" - " +
															job.end}
													</h6>
													<h6 className="Entry-name">
														{job.name}
													</h6>
													<p className="Entry-company">
														{"chez" +
															" " +
															job.company}
													</p>
													<div className="Entry-description">
														{job.description.map(
															(
																para,
																paraIndex,
															) => {
																return (
																	<p
																		className="Para"
																		key={
																			paraIndex
																		}
																	>
																		{para}
																	</p>
																)
															},
														)}
													</div>
												</div>
											)
										})}
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</section>
		)
	}
}

Experiences.defaultProps = {
	data: [
		{
			field: "<SECTEUR>",
			jobs: [
				{
					name: "<NOM_DU_POSTE>",
					start: "<DATE_DEBUT>",
					end: "<DATE_FIN>",
					company: "<ENTREPRISE_SOCIETE>",
					description: ["<DESCRIPTION>", "<DESCRIPTION>"],
				},
			],
		},
	],
}

export default Experiences
