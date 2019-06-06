import React from "react"

class Timeline extends React.Component {
	render() {
		return (
			<iframe
				className="Timeline"
				src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1teMCSvRmtBI5xfOUVJPMVQweGe-R-Ca2MLArEdELmuY&font=PT&lang=fr&hash_bookmark=true&initial_zoom=0&height=370"
				width="100%"
				height="370"
				webkitallowfullscreen
				mozallowfullscreen
				allowfullscreen
				frameborder="0"
			/>
		)
	}
}

export default Timeline
