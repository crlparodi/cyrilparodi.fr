import React from "react";
import PropTypes from "prop-types";

/* MODULES */
import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import { faBars } from "modules/@fortawesome/free-solid-svg-icons";

class HeaderToggleButton extends React.Component {
	render() {
		return (
			<div className={"HeaderToggle cell shrink"} onClick={this.props.drawerClickHandler}>
				<FontAwesomeIcon icon={faBars} />
			</div>
		);
	}
}

HeaderToggleButton.propTypes = {
	drawerClickHandler: PropTypes.func,
};

export default HeaderToggleButton;
