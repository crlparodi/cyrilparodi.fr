import React from "react"
import PropTypes from "prop-types"

class Button extends React.Component {
	constructor(props) {
		super()
		this.state = {
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
				className={
					"Button" +
					" " +
					(this.props.dark ? "isDark" : "isLight") +
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
	dark: PropTypes.bool,
	inner: PropTypes.string,
	ico: PropTypes.string,
	url: PropTypes.string,
}

Button.defaultProps = {
	dark: true,
	html: "<HTML>",
	icon: "<ICO>",
	url: "<URL>",
}

export default Button
