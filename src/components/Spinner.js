import React from "react"

/* CSS Spinner for Component Loading */
class Spinner extends React.Component {
	render() {
		return (
			<div className="lds-ellipsis">
				<div />
				<div />
				<div />
				<div />
			</div>
		)
	}
}

export default Spinner
