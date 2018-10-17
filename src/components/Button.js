import React from "react"
import PropTypes from "prop-types"
import PropShapes from "../prop_types/homepage"

class Button extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
			backgroundColor: "rgba(0, 0, 0, 0)",
			color: props.dark ? "#FFFFFF" : "#363636",
			borderColor: props.dark ? "#FFFFFF" : "#cbcbcb",
			isHovered: false,
			colorOnHover: props.dark ? "#818181" : "inherit",
			borderColorOnHover: props.dark ? "#818181" : "#4a4a4a",
		}
	}
	setButtonHovered(toogle) {
		this.setState({ isHovered: toogle })
	}
	render() {
		return (
			<a
				href={this.state.data.link}
				className={
					"button " +
					"is-large " +
					(this.state.isHovered ? "hover " : null)
				}
				style={{
					color: this.state.isHovered
						? this.state.colorOnHover
						: this.state.color,
					backgroundColor: this.state.backgroundColor,
					borderColor: this.state.isHovered
						? this.state.borderColorOnHover
						: this.state.borderColor,
				}}
				onMouseEnter={() => this.setButtonHovered(true)}
				onMouseLeave={() => this.setButtonHovered(false)}
			>
				<span>{this.state.data.html}</span>
				<i className={this.state.data.icon} />
			</a>
		)
	}
}

Button.propTypes = {
	dark: PropTypes.bool,
	data: PropShapes.cv_link,
}

Button.defaultProps = {
	dark: true,
	data: {
		html: "<HTML>",
		icon: "<NONE>",
		link: "<URL>",
	},
}

export default Button
