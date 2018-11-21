import React from "react"
import PropTypes from "prop-types"
import HeaderLinks from "./HeaderLinks"
import "./HeaderSideBar.scss"

class HeaderSideBar extends React.Component {
	constructor() {
		super()
		this.state = {
			sideBarClasses: "mii-sidebar",
		}
	}

	componentWillReceiveProps = props => {
		this.headerDrawerState(props.show)
	}

	headerDrawerState = prop => {
		if (prop == true) {
			this.setState({ sideBarClasses: "mii-sidebar open" })
		} else {
			this.setState({ sideBarClasses: "mii-sidebar" })
		}
	}
	render() {
		return (
			<div className={this.state.sideBarClasses}>
				<HeaderLinks mobileClickHandler={this.props.clickHandler} />
			</div>
		)
	}
}

HeaderSideBar.propTypes = {
	show: PropTypes.bool,
	clickHandler: PropTypes.func,
}

export default HeaderSideBar
