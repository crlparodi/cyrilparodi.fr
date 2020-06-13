import React, { Fragment } from "react";
import PropTypes from "prop-types";

/* CONTAINERS - TO BE USED SOON */
import { DateParser, DateBinary } from "root/containers/Date";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

/* FONT-AWESOME */
import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import { faSuitcase } from "modules/@fortawesome/free-solid-svg-icons";

class Experiences extends React.Component {
	constructor(props) {
		super();
		this.data = props.data;
		this.ref = props.reference;
	}

	render() {
		return (
			<section className="Experiences isWrapper" ref={this.ref}>
				<div className="Experiences isContainer">
					<h2 className="ob-title isMono">{"experiences"}</h2>
					<div className="Experiences-content">
						{this.data.map((data, dataIndex) => {
							return (
								<Fragment key={dataIndex}>
									<div className="Left-Colon">
										<p className="Date">
											{data.startDate + " - " + data.endDate}
										</p>
										{/* For the terminal theme ;-)
											<p className="Date">{DateBinary(data.startDate) + " - " + DateBinary(data.endDate)}</p> */}
									</div>
									<div className="Right-Colon">
										<h5 className="Company">
											<a className="Company-link ob-link" href={data.website}>
												{data.company}
											</a>
										</h5>
										<h4 className="Positon">{data.position}</h4>
										<div className="Projects">
											{data.projects.map((project, projectIndex) => {
												return (
													<div
														className="Projects-entry"
														key={projectIndex}>
														<h5 className="Project">
															{project.summary}
														</h5>
														<ul>
															{project.highlights.map(
																(highlight, highlightIndex) => {
																	return (
																		<li
																			className="Highlight"
																			key={highlightIndex}>
																			{highlight}
																		</li>
																	);
																},
															)}
														</ul>
														<FontAwesomeIcon icon={faSuitcase} />
													</div>
												);
											})}
										</div>
									</div>
								</Fragment>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}

Experiences.propTypes = {
	reference: PropTypes.any,
	data: PropSets.workList,
};

export default Experiences;
