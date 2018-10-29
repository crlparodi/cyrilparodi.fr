import React from "react";
import request from "superagent";
import PropShapes from "../../../prop_types/homepage";
import Button from "../../../components/Button";
import "../../../styles/CVSection.scss";

const hrefs = ["", "http://www.cyrilparodi.fr/docs/CV_6.1_1018_C.pdf"];

class CVSection extends React.Component {
	constructor(props) {
		super();
		this.state = {
			data: props.data,
		};
	}
	componentDidMount() {
		return request.get(this.state.data).then((error, response) => {
			return error
				? error
				: this.setState({
						data: this.props.defaultProps,
				  });
		});
	}
	render() {
		return (
			<div className="mii-cv-section">
				{this.state.data.map((cv_path, index) => {
					return (
						<Button
							dark={false}
							data={cv_path}
							href={hrefs[index]}
						/>
					);
				})}
			</div>
		);
	}
}

CVSection.propTypes = {
	data: PropShapes.cv_link,
};

CVSection.defaultProps = {
	data: {
		html: "<EMPTY>",
		icon: "<X>",
	},
};

export default CVSection;
