import React, { Fragment } from "react";
import PropTypes from "prop-types";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

class Resources extends React.Component {
	constructor(props) {
		super(props);
		this.resources = props.resources;
	}
	render() {
		return (
			<>
				{this.resources.map((resource, catIndex) => {
					return (
						<li className="Resource" key={catIndex}>
							<p className="Resource-category">{resource.category}</p>
							<ul className="Resource-res">
								{resource.res.map((res, resIndex) => {
									return (
										<li className="Item" key={resIndex}>
											{res}
										</li>
									);
								})}
							</ul>
						</li>
					);
				})}
			</>
		);
	}
}

Resources.propTypes = {
	resources: PropSets.resources,
};

export default Resources;
