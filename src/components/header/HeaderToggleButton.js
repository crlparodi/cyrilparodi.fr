import React from "react"
import PropTypes from "prop-types"

class HeaderToggleButton extends React.Component {
	render() {
		return (
			<div
				className="HeaderToggle cell shrink"
				onClick={this.props.drawerClickHandler}
			>
				<i className="Toggle fas fa-bars" aria-hidden="true" />
			</div>
		)
	}
}

HeaderToggleButton.propTypes = {
	drawerClickHandler: PropTypes.func,
}

export default HeaderToggleButton
