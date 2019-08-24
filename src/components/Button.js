import React from "react"

/* PROP-TYPES */
import PropTypes from "prop-types"

class Button extends React.Component {
	constructor(props) {
		super()
		this.state = {
			noredirect: props.noredirect,
			inner: props.inner,
			url: props.url
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
				className="ob-button"
			>
				<span>{this.state.inner}</span>
			</a>
		)
	}
}

Button.propTypes = {
	noredirect: PropTypes.bool
}

Button.defaultProps = {
	inner: "<HTML>",
	url: "<URL>"
}

export default Button
