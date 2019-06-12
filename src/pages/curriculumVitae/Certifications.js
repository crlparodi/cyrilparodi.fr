import React from "react"

/* MEDIAS */
import ISTQBBlaze from "img/ISTQBLogo"

const blazes = [<ISTQBBlaze />]

class Certifications extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}
	render() {
		return (
			<section className="Certifications isWrapper">
				<div className="Certifications-container isContainer">
					<h2 className="Certifications-title ob-title isPrimary">
						{"certifications."}
					</h2>
					<div className="Certifications-entries">
						{this.state.data.map((certification, certifIndex) => {
							return (
								<div className="Entry" key={certifIndex}>
									<div className="Entry-blaze">
										{blazes[certifIndex]}
									</div>
									<div className="Entry-info">
										<h5 className="Entry-info-name">
											{certification.name}
										</h5>
										<p className="Entry-info-data">
											{"Obtenu en" +
												" " +
												certification.date +
												"."}
											<br />
											{"délivré par l'" +
												certification.institution +
												"."}
										</p>
									</div>
									<a
										target="_blank"
										rel="noopener noreferrer"
										className="Entry-link ob-link"
										href={certification.document}
									>
										<i className="fas fa-external-link-alt" />
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

Certifications.defaultProps = {
	data: {
		name: "<CERTIFICATION>",
		institution: "<INSTITUTION>",
		date: "<JANVIER_1900>",
		document: "<NONE>",
	},
}

export default Certifications
