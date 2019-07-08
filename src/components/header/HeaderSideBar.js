import React from "react"
import PropTypes from "prop-types"

/* COMPONENTS */
import HeaderLinks from "root/components/header/HeaderLinks"

class HeaderSideBar extends React.Component {
	constructor() {
		super()
		this.state = {
			sideBarClasses: "",
		}
	}

	componentWillReceiveProps(props) {
		this.headerDrawerState(props.show)
	}

	headerDrawerState(prop) {
		if (prop == true) {
			this.setState({ sideBarClasses: " isOpen" })
		} else {
			this.setState({ sideBarClasses: "" })
		}
	}
	render() {
		return (
			<div className={"SideBar" + this.state.sideBarClasses}>
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
