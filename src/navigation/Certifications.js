import React from "react"
import PropTypes from "prop-types"

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

/* FONT-AWESOME */
import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "modules/@fortawesome/free-solid-svg-icons"

class Certifications extends React.Component {
	constructor(props) {
		super(props)
		this.data = props.data
		this.ref = props.reference
	}
	render() {
		return (
			<section className="Certifications isWrapper" ref={this.ref}>
				<div className="Certifications isContainer">
					<h2 className="ob-title isMono">
						{"certifications"}
					</h2>
					<div className="Certifications-content">
						{this.data.map((certification, certifIndex) => {
							return (
								<div className="Entry" key={certifIndex}>
									<div className="Info">
										<h5 className="Name">
											{certification.title}
										</h5>
										<p className="Date">
											{"Obtenu en" +
												" " +
												certification.date +
												"."}
											<br />
											{"délivré par l'" +
												certification.awarder +
												"."}
										</p>
									</div>
									<a
										target="_blank"
										rel="noopener noreferrer"
										className="Link ob-link"
										href={certification.document}
									>
										<FontAwesomeIcon icon={faExternalLinkAlt} />
									</a>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		)
	}
}

Certifications.propTypes = {
	data: PropSets.awardList,
	reference: PropTypes.any
}

Certifications.defaultProps = {
	data: {
		name: "<CERTIFICATION>",
		institution: "<INSTITUTION>",
		date: "<JANVIER_1900>",
		document: "<NONE>",
	},
}


export default Certifications
