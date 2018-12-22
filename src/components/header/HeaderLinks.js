import React from "react"
import PropTypes from "prop-types"
import { NavHashLink as NavLink } from "react-router-hash-link"

const HeaderLinks = props => (
	<div className="Nav">
		<NavLink className="ob-link" to="/" onClick={props.mobileClickHandler}>
			à propos.
		</NavLink>
		<NavLink
			className="ob-link"
			to="/cv"
			onClick={props.mobileClickHandler}
		>
			cv.
		</NavLink>
		<NavLink className="ob-link" to="" onClick={props.mobileClickHandler}>
			portfolio.
		</NavLink>
		<a
			className="ob-link"
			href="javascript:void(0)"
			onClick={() => {
				window.scrollTo(0, document.body.scrollHeight)
				props.mobileClickHandler()
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
