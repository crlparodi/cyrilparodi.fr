import React from "react"

class Error404 extends React.Component {
	constructor(props) {
		super()
		this.state = {
			height: 720,
		}
		this._isMounted = false
	}
	updateDimensions() {
		let update_height = window.innerHeight
		if (this._isMounted) this.setState({ height: update_height })
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
				<h1 className="ob-title isMarginless text-center">
					{"Page introuvable..."}
				</h1>
			</div>
		)
	}
}

export default Error404
