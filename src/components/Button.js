import React from "react"

/* PROP-TYPES */
import PropTypes from "prop-types"

class Button extends React.Component {
	constructor(props) {
		super()
		this.state = {
			alt: props.alt,
			noredirect: props.noredirect,
			inner: props.inner,
			url: props.url,
		}
		this._isMounted = false
	}
	componentDidMount() {
		this._isMounted = true
	}
	componentWillUnmount() {
		this._isMounted = false
	}
	render() {
		return (
			<a
				href={this.state.url}
				target={this.state.noredirect ? "" : "_blank"}
				rel={this.state.noredirect ? "" : "noopener noreferrer"}
				className={
					"Button" +
					" " +
					(this.state.alt ? "isAlt" : "") +
					" " +
					"text-center"
				}
			>
				<span>{this.state.inner}</span>
			</a>
		)
	}
}

Button.propTypes = {
	alt: PropTypes.bool,
	noredirect: PropTypes.bool,
}

Button.defaultProps = {
	inner: "<HTML>",
	url: "<URL>",
}

export default Button
