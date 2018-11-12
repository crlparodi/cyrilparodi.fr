import React from "react"
import PropTypes from "prop-types"
import "./Backdrop.scss"

class Backdrop extends React.Component {
	constructor() {
		super()
		this.state = {
			backdropClasses: "mii-backdrop",
		}
	}
	componentWillReceiveProps = props => {
		this.backdropState(props.show)
	}
	backdropState = prop => {
		if (prop == true) {
			this.setState({ backdropClasses: "mii-backdrop open" })
		} else {
			this.setState({ backdropClasses: "mii-backdrop" })
		}
	}
	render() {
		return (
			<div
				className={this.state.backdropClasses}
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
