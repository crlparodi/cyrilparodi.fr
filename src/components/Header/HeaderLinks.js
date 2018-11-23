import React from "react"
import PropTypes from "prop-types"
import { NavHashLink as NavLink } from "react-router-hash-link"

const HeaderLinks = props => (
	<div className="mii-nav">
		<NavLink className="mii-link" to="/" onClick={props.mobileClickHandler}>
			à propos.
		</NavLink>
		<NavLink
			className="mii-link"
			to="/cv"
			onClick={props.mobileClickHandler}
		>
			cv.
		</NavLink>
		<NavLink className="mii-link" to="" onClick={props.mobileClickHandler}>
			portfolio.
		</NavLink>
		<a
			className="mii-link"
			href="javascript:void(0)"
			onClick={() => {
				props.mobileClickHandler()
				window.scrollTo(0, document.body.scrollHeight)
			}}
		>
			contact.
		</a>
	</div>
)

HeaderLinks.propTypes = {
	mobileClickHandler: PropTypes.func,
}

export default HeaderLinks
