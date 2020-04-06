import React, { Fragment } from "react";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

/* MODULES */
import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import { faEnvelope, faTimesCircle } from "modules/@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const switchIcon = profileName => {
	switch (profileName.toLowerCase()) {
		case "linkedin":
			return faLinkedin;
			break;
		case "github":
			return faGithub;
			break;
		default:
			return faTimesCircle;
	}
};

class SocialMedia extends React.Component {
	constructor(props) {
		super(props);
		this.email = props.email;
		this.profiles = props.profiles;
	}

	render() {
		return (
			<>
				<a className="ob-link" href={"mailto:" + this.email} target="_blank">
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
				{this.profiles.map((profile, index) => {
					return (
						<a className="ob-link" href={profile.url} key={index} target="_blank">
							<FontAwesomeIcon icon={switchIcon(profile.network)} />
						</a>
					);
				})}
			</>
		);
	}
}

SocialMedia.propTypes = {
	email: PropSets.email,
	profiles: PropSets.profiles,
};

SocialMedia.defaultProps = {
	email: "<MAIL>",
	profiles: [
		{
			network: "Network_1",
			url: "www.testeroni.org",
		},
		{
			network: "Network_2",
			url: "www.testeroni.org",
		},
	],
};

export default SocialMedia;
