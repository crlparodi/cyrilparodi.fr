import React from "react";

import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "modules/@fortawesome/free-solid-svg-icons";

class Toolbox extends React.Component {
	constructor(props) {
		super(props);
		this.themeHandler = props.themeHandler;
		this.state = {
			toggleDark: false,
			toggleDisplay: null,
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

	handleDarkToggleDisplay() {
		if (this.state.toggleDisplay != "onDisplay") {
			this.setState({ toggleDisplay: "onDisplay" });
		} else {
			this.setState({ toggleDisplay: "onHide" });
		}
	}

	render() {
		return (
			<section className={"Toolbox" + " " + this.state.toggleDisplay}>
				<div className={"isContainer"}>
					<FontAwesomeIcon
						icon={faAngleDoubleLeft}
						onClick={this.handleDarkToggleDisplay.bind(this)}
					/>
					<div className="Switch">
						<p className="Switch-label">{"mode sombre"}</p>
						<label className="Switch-box">
							<input
								type="checkbox"
								className="Switch-input"
								onChange={this.handleDarkToggle.bind(this)}
							/>
							<span className="Switch-design"></span>
						</label>
					</div>
				</div>
			</section>
		);
	}
}

export default Toolbox;
