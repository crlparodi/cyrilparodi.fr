import React from "react";

import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import { faSun, faMoon } from "modules/@fortawesome/free-solid-svg-icons";

class Toolbox extends React.Component {
	constructor(props) {
		super(props);
		this.themeHandler = props.themeHandler;
		this.state = {
			toggleDark: false,
		};
	}

	componentDidMount() {
		this.handleDarkToggle(this.state.toggleDark);
		this.setState({ toggleDisplay: "onHide" });
	}

	handleDarkToggle() {
		this.themeHandler(this.state.toggleDark);
		this.setState({ toggleDark: !this.state.toggleDark });
	}

	render() {
		return (
			<section className={"Toolbox"}>
				<div className={"isContainer"}>
					<p className="Title">{"Mode sombre"}</p>
					<FontAwesomeIcon icon={faSun} />
					<div className="Switch">
						<label className="Switch-box">
							<input
								type="checkbox"
								className="Switch-input"
								onChange={this.handleDarkToggle.bind(this)}
							/>
							<span className="Switch-design"></span>
						</label>
					</div>
					<FontAwesomeIcon icon={faMoon} />
				</div>
			</section>
		);
	}
}

export default Toolbox;
