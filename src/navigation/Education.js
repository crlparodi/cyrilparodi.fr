import React, { Fragment } from "react";
import PropTypes from "prop-types";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

/* FONT AWESOME */
import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import { faLink } from "modules/@fortawesome/free-solid-svg-icons";

class Education extends React.Component {
	constructor(props) {
		super();
		this.data = props.data;
		this.ref = props.reference;
	}

	description(descArray) {
		if (descArray.length != 0) {
			return descArray.map((description, index) => {
				return <p key={index}>{description}</p>;
			});
		}
	}

	links(linkArray) {
		if (linkArray.length != 0) {
			return (
				<>
					<div className="Links">
						<FontAwesomeIcon icon={faLink} />
						{linkArray.map((link, index) => {
							return (
								<Fragment key={index}>
									{" - "}
									<a
										className="ob-link"
										href={link.url}
										target="_blank"
										rel="noopener noreferrer">
										{link.name}
									</a>
								</Fragment>
							);
						})}
					</div>
				</>
			);
		}
	}

	render() {
		return (
			<section className="Education isWrapper" ref={this.ref}>
				<div className="Education isContainer">
					<h2 className="ob-title isMono">{"formations"}</h2>
					<ul className="Education-content">
						{this.data.map((education, index) => {
							return (
								<li className="Entry isContainer" key={index}>
									<div className="Entry-L">
										<p className="School ob-subtitle">
											{education.institution}
										</p>
										<p className="Year">
											{education.startDate + " - " + education.endDate}
										</p>

									</div>
									<div className="Entry-R">
										<p className="Grade ob-subtitle">
											{education.studyType + " - " + education.area}
										</p>
										<div className="Description">
											{this.description(education.description)}
										</div>
										<div className="Entry-R-Bottom">
											{this.links(education.links)}
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		);
	}
}

Education.propTypes = {
	data: PropSets.educationList,
	reference: PropTypes.any,
};

export default Education;
