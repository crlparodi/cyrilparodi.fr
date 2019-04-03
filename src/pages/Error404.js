import React from "react"

class Error404 extends React.Component {
	constructor(props) {
		super()
		/* NOTE TO MYSELF: When i'm adding a stateless propType to a stateful component,
		 * don't forget to declare the new states from the propTypes
		 */
		this.state = {
			height: 720,
			display: "initial",
			data: props.data,
		}
		this._isMounted = false
	}
	updateDimensions() {
		if (window.innerHeight <= 720) {
			let update_height = window.innerHeight
			if (this._isMounted) this.setState({ height: update_height })
		} else {
			let update_height = 720
			if (this._isMounted) this.setState({ height: update_height })
		}
	}
	componentDidMount() {
		this._isMounted = true
		this.updateDimensions()
		window.addEventListener("resize", this.updateDimensions.bind(this))
	}
	componentWillUnmount() {
		this._isMounted = false
	}
	render() {
		return (
			<div
				className="Error404"
				style={{ height: this.state.height + "px" }}
			>
				<div className="Error404-msg">
					<h1 className="Num404 text-center">404</h1>
					<h1 className="ob-title">Page introuvable...</h1>
				</div>
			</div>
		)
	}
}

export default Error404
