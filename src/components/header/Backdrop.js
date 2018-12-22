import React from "react"
import PropTypes from "prop-types"

class Backdrop extends React.Component {
	constructor() {
		super()
		this.state = {
			backdropClasses: "",
		}
	}
	componentWillReceiveProps(props) {
		this.backdropState(props.show)
	}
	backdropState(prop) {
		if (prop == true) {
			this.setState({ backdropClasses: " isOpen" })
		} else {
			this.setState({ backdropClasses: "" })
		}
	}
	render() {
		return (
			<div
				className={"HeaderBackDrop" + this.state.backdropClasses}
				onClick={this.props.clickHandler}
			/>
		)
	}
}

Backdrop.propTypes = {
	show: PropTypes.bool,
	clickHandler: PropTypes.func,
}

export default Backdrop
