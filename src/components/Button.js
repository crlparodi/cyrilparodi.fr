import React from "react";
import PropTypes from "prop-types";
import PropShapes from "../prop_types/homepage";
import { BiskayaBlue, Teal, WhitePearl, DarkTeal } from "./Color.js";
import "../styles/components/Button.scss";

class Button extends React.Component {
	constructor(props) {
		super();
		this.state = {
			data: props.data,
			href: props.href,
		};
	}
	render() {
		return (
			<a
				href={this.state.href}
				className={
					"button " +
					"is-large " +
					(this.props.dark ? "dark" : "light")
				}
				style={{
					marginLeft: 20 + "px",
					border: 2 + "px" + " solid ",
					borderRadius: 0,
					textTransform: "uppercase",
					letterSpacing: 2 + "px",
				}}
			>
				<span style={{ marginRight: "auto" }}>
					{this.state.data.html}
				</span>
				<i className={this.state.data.icon} />
			</a>
		);
	}
}

Button.propTypes = {
	dark: PropTypes.bool,
	data: PropShapes.cv_link,
	href: PropTypes.string,
};

Button.defaultProps = {
	dark: true,
	data: {
		html: "<HTML>",
		icon: "<NONE>",
	},
	href: "<URL>",
};

export default Button;
