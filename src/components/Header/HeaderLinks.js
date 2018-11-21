import React from "react"
import PropTypes from "prop-types"
import { NavHashLink as NavLink } from "react-router-hash-link"

const HeaderLinks = props => (
	<div className="mii-nav">
		<NavLink className="mii-link" to="/" onClick={props.mobileClickHandler}>
			À propos
		</NavLink>
		<NavLink
			className="mii-link"
			to="/cv"
			onClick={props.mobileClickHandler}
		>
			CV
		</NavLink>
		<NavLink className="mii-link" to="" onClick={props.mobileClickHandler}>
			Portfolio
		</NavLink>
	</div>
)

HeaderLinks.propTypes = {
	mobileClickHandler: PropTypes.func,
}

export default HeaderLinks
