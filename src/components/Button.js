import React from "react";
import PropTypes from "prop-types";
import PropShapes from "../prop_types/homepage";

class Button extends React.Component {
	constructor(props) {
		super();
		this.state = {
			data: props.data,
			href: props.href,
			width: props.width,
			backgroundColor: "rgba(0, 0, 0, 0)",
			color: props.dark ? "#FFFFFF" : "#363636",
			borderColor: props.dark ? "#FFFFFF" : "#cbcbcb",
			isHovered: false,
			colorOnHover: props.dark ? "#818181" : "inherit",
			borderColorOnHover: props.dark ? "#818181" : "#4a4a4a",
		};
	}
	setButtonHovered(toogle) {
		this.setState({ isHovered: toogle });
	}
	render() {
		return (
			<a
				href={this.state.href}
				className={
					"button " +
					"is-large " +
					(this.state.isHovered ? "hover " : null)
				}
				style={{
					width: this.state.width,
					color: this.state.isHovered
						? this.state.colorOnHover
						: this.state.color,
					backgroundColor: this.state.backgroundColor,
					borderColor: this.state.isHovered
						? this.state.borderColorOnHover
						: this.state.borderColor,
					marginLeft: 20 + "px",
					border: 1 + "px" + " solid",
					borderRadius: 0,
					textTransform: "uppercase",
					letterSpacing: 2 + "px",
				}}
				onMouseEnter={() => this.setButtonHovered(true)}
				onMouseLeave={() => this.setButtonHovered(false)}
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
	width: PropTypes.string,
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
