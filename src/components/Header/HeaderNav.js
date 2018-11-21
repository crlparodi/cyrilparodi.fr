import React from "react"
import HeaderLinks from "./HeaderLinks"
import "./HeaderNav.scss"

class HeaderNav extends React.Component {
	render() {
		return (
			<div className="mii-nav-desktop">
				<HeaderLinks />
			</div>
		)
	}
}

export default HeaderNav
