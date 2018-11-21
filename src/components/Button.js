import React from "react"
import PropTypes from "prop-types"
import "../styles/components/Button.scss"

class Button extends React.Component {
	constructor(props) {
		super()
		this.state = {
			inner: props.inner,
			ico: props.ico,
			url: props.url,
			buttonSize: "is-large ",
		}
		this._isMounted = false
	}
	componentDidMount() {
		this._isMounted = true

		this.buttonSizeSwitcher()
		window.addEventListener("resize", this.buttonSizeSwitcher.bind(this))
	}
	componentWillUnmount() {
		this._isMounted = false
	}
	buttonSizeSwitcher = () => {
		if (window.innerWidth <= 768) {
			if (this._isMounted) this.setState({ buttonSize: "is-medium " })
		}
		if (window.innerWidth > 768) {
			if (this._isMounted) this.setState({ buttonSize: "is-large " })
		}
	}
	render() {
		return (
			<a
				href={this.state.url}
				className={
					"button " +
					this.state.buttonSize +
					(this.props.dark ? "dark" : "light")
				}
				style={{
					border: 2 + "px" + " solid ",
					borderRadius: 0,
					textTransform: "uppercase",
					letterSpacing: 2 + "px",
				}}
			>
				<span style={{ marginRight: "auto" }}>{this.state.inner}</span>
				<i className={this.state.ico} />
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
