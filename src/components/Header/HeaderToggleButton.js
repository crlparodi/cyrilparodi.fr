import React from "react"
import PropTypes from "prop-types"

import "./HeaderToggleButton.scss"

class HeaderToggleButton extends React.Component {
	render() {
		return (
			<div
				className="mii-header-toggle"
				onClick={this.props.drawerClickHandler}
			>
				<i className="mii-toggle fas fa-bars" aria-hidden="true" />
			</div>
		)
	}
}

HeaderToggleButton.propTypes = {
	drawerClickHandler: PropTypes.func,
}

export default HeaderToggleButton
