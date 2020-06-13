import React from "react";
import PropTypes from "prop-types";

/* COMPONENTS */
import HeaderNav from "root/components/header/HeaderNav";

class HeaderSideBar extends React.Component {
	constructor() {
		super();
		this.state = {
			sideBarClasses: "",
		};
	}

	UNSAFE_componentWillReceiveProps(props) {
		this.headerDrawerState(props.show);
	}

	headerDrawerState(prop) {
		if (prop === true) {
			this.setState({ sideBarClasses: " isOpen" });
		} else {
			this.setState({ sideBarClasses: "" });
		}
	}
	render() {
		return (
			<div className={"SideBar" + this.state.sideBarClasses}>
				<HeaderNav
					navHandler={this.props.navHandler}
					mobileClickHandler={this.props.clickHandler}
				/>
			</div>
		);
	}
}

HeaderSideBar.propTypes = {
	show: PropTypes.bool,
	navHandler: PropTypes.func,
	clickHandler: PropTypes.func,
};

export default HeaderSideBar;
