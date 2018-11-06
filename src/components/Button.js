import React from "react"
import PropTypes from "prop-types"
import PropShapes from "../prop_types/homepage"
import { BiskayaBlue, Teal, WhitePearl, DarkTeal } from "./Color.js"
import "../styles/components/Button.scss"

class Button extends React.Component {
	constructor(props) {
		super()
		this.state = {
			inner: props.inner,
			ico: props.ico,
			url: props.url,
		}
	}
	render() {
		return (
			<a
				href={this.state.url}
				className={
					"button " +
					"is-large " +
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
