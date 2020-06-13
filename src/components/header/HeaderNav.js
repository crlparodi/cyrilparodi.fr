import React from "react";
import PropTypes from "prop-types";

/* MODULES */
import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import {
	faUser,
	faSuitcase,
	faGraduationCap,
	faCogs,
	faAward,
	faTerminal,
	faCode,
	faFilePdf,
	faPaperPlane,
} from "modules/@fortawesome/free-solid-svg-icons";

class HeaderNav extends React.Component {
	constructor(props) {
		super(props);
		this.mobileClickHandler = props.mobileClickHandler;
	}

	render() {
		return (
			<ul className="Nav">
				<li>
					<a
						className={"ob-link isFromHeader"}
						href="#!"
						onClick={() => {
							/* mobileClickHandler have to be imperatively be processed in last */
							/* ...because it acts directly on the header component before he gets */
							/* ...the acknowledge of the refs to reach */
							this.props.navHandler("about");
							if (this.mobileClickHandler !== null) this.mobileClickHandler();
						}}>
						<FontAwesomeIcon icon={faUser} />à propos
					</a>
				</li>
				<li>
					<a
						className={"ob-link isFromHeader"}
						href="#!"
						onClick={() => {
							this.props.navHandler("exps");
							if (this.mobileClickHandler != null) this.mobileClickHandler();
						}}>
						<FontAwesomeIcon icon={faSuitcase} />
						experiences
					</a>
				</li>
				<li>
					<a
						className={"ob-link isFromHeader"}
						href="#!"
						onClick={() => {
							this.props.navHandler("educ");
							if (this.mobileClickHandler != null) this.mobileClickHandler();
						}}>
						<FontAwesomeIcon icon={faGraduationCap} />
						formations
					</a>
				</li>
				<li>
					<a
						className={"ob-link isFromHeader"}
						href="#!"
						onClick={() => {
							this.props.navHandler("skills");
							if (this.mobileClickHandler != null) this.mobileClickHandler();
						}}>
						<FontAwesomeIcon icon={faCogs} />
						competences
					</a>
				</li>
				<li>
					<a
						className={"ob-link isFromHeader"}
						href="#!"
						onClick={() => {
							this.props.navHandler("award");
							if (this.mobileClickHandler != null) this.mobileClickHandler();
						}}>
						<FontAwesomeIcon icon={faAward} />
						certifs
					</a>
				</li>
				<li>
					<a
						className={"ob-link isFromHeader"}
						href="#!"
						onClick={() => {
							this.props.navHandler("hobbies");
							if (this.mobileClickHandler != null) this.mobileClickHandler();
						}}>
						<FontAwesomeIcon icon={faTerminal} />
						loisirs
					</a>
				</li>
				<li>
					<a
						className={"ob-link isFromHeader"}
						href="#!"
						onClick={() => {
							this.props.navHandler("proj");
							if (this.mobileClickHandler != null) this.mobileClickHandler();
						}}>
						<FontAwesomeIcon icon={faCode} />
						projets
					</a>
				</li>
				<li>
					<a
						className={"ob-link isFromHeader"}
						href="#!"
						onClick={() => {
							this.props.navHandler("pdf");
							if (this.mobileClickHandler != null) this.mobileClickHandler();
						}}>
						<FontAwesomeIcon icon={faFilePdf} />
						pdf
					</a>
				</li>
				<li>
					<a
						className={"ob-link isFromHeader"}
						href="#!"
						onClick={() => {
							window.scrollTo(0, document.body.scrollHeight);
							if (this.mobileClickHandler != null) this.mobileClickHandler();
						}}>
						<FontAwesomeIcon icon={faPaperPlane} />
						contact
					</a>
				</li>
			</ul>
		);
	}
}

HeaderNav.propTypes = {
	navHandler: PropTypes.func,
	mobileClickHandler: PropTypes.func,
};

export default HeaderNav;
