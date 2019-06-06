import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const HeaderLinks = props => (
	<div className="Nav">
		<Link className="ob-link" to="/" onClick={props.mobileClickHandler}>
			à propos.
		</Link>
		<Link className="ob-link" to="/cv" onClick={props.mobileClickHandler}>
			cv.
		</Link>
		<Link className="ob-link" to="" onClick={props.mobileClickHandler}>
			projets.
		</Link>
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
