import React from "react";
import "../styles/Spinner.scss";

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
		);
	}
}

export default Spinner;
