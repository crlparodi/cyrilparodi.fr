import React from "react";
import PropTypes from "prop-types";

/* MEDIAS */
import IMG from "img/board.jpg";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

/* FONT-AWESOME */
import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

class PDF extends React.Component {
	constructor(props) {
		super(props);
		this.data = props.data;
		this.ref = props.reference;
	}
	render() {
		return (
			<section
				className="PDF"
				style={{
					backgroundImage: "url(" + IMG + ")",
				}}
				ref={this.ref}>
				<div className="PDF-backgroundCover isWrapper">
					<div className="PDF-container isContainer">
						<p>Besoin d'un format papier ? Téléchargez une version A4 ci-dessous:</p>
						<a
							className="ob-button"
							target="_blank"
							href={this.data.curriculum_vitae.url}>
							<FontAwesomeIcon icon={faFilePdf} />
							{"Télécharger le CV"}
						</a>
					</div>
				</div>
			</section>
		);
	}
}

PDF.propTypes = {
	data: PropSets.basics,
	reference: PropTypes.any,
};

export default PDF;
