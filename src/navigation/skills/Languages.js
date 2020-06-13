import React, { Fragment } from "react";
import PropTypes from "prop-types";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

class Languages extends React.Component {
	constructor(props) {
		super(props);
		this.languages = props.languages;
	}
	render() {
		return (
			<>
				{this.languages.map((language, index) => {
					return (
						<li className="Language" key={index}>
							<p className="Language-language">{language.language}</p>
							<p className="Language-fluency">{language.fluency}</p>
						</li>
					);
				})}
			</>
		);
	}
}

Languages.propTypes = {
	languages: PropSets.languages,
};

export default Languages;
