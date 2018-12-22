import React from "react"

/* COMPONENTS */
import HeaderLinks from "root/components/header/HeaderLinks"

class HeaderNav extends React.Component {
	render() {
		return (
			<div className="HeaderDesktop cell shrink">
				<HeaderLinks />
			</div>
		)
	}
}

export default HeaderNav
