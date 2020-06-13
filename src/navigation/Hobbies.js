import React from "react";
import PropTypes from "prop-types";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import { faLaptopCode, faHdd, faTv, faBookReader } from "modules/@fortawesome/free-solid-svg-icons";
import { faLinux } from "modules/@fortawesome/free-brands-svg-icons";

const hobbIcons = [faLaptopCode, faLinux, faHdd, faTv, faBookReader];

class Hobbies extends React.Component {
	constructor(props) {
		super(props);
		this.data = props.data;
		this.ref = props.reference;
	}
	render() {
		return (
			<section className="Hobbies isWrapper" ref={this.ref}>
				<div className="Hobbies isContainer">
					<h2 className="ob-title isMono">{"centres d'intérêt"}</h2>
					<ul className="Hobbies-content">
						{this.data.map((hobby, hobbIndex) => {
							return (
								<li className="Hobby" key={hobbIndex}>
									<FontAwesomeIcon icon={hobbIcons[hobbIndex]} />
									<p className="Hobby-name">{hobby.name}</p>
									<ul className="Hobby-keywords">
										{hobby.keywords.map((keyword, keyIndex) => {
											return (
												<li className="Item" key={keyIndex}>
													{keyword}
												</li>
											);
										})}
									</ul>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		);
	}
}

Hobbies.propTypes = {
	data: PropSets.interests,
	reference: PropTypes.any,
};

export default Hobbies;
